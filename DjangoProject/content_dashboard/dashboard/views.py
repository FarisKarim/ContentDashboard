from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from .models import CustomUser, Company, JobOpening
from .serializers import UserRegistrationSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from .serializers import CompanySerializer, JobOpeningSerializer
from decouple import config

import requests


class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SomeEndpointView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "Hello, " + request.user.first_name + "!"})


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class JobOpeningViewSet(viewsets.ModelViewSet):
    serializer_class = JobOpeningSerializer

    def get_queryset(self):
        company_id = self.request.query_params.get('company', None)
        if company_id:
            return JobOpening.objects.filter(company__id=company_id)
        return JobOpening.objects.all()


ADZUNA_API_URL = "https://api.adzuna.com/v1/api/jobs/{country}/search/1"


class AdzunaJobsViewSet(viewsets.ViewSet):

    @action(detail=False, methods=['GET'])
    def fetch_jobs(self, request):
        country = request.GET.get('country')  # default to US

        params = {
            'app_id': config('ADZUNA_APP_ID'),
            'app_key': config('ADZUNA_APP_KEY'),
        }

        headers = {
            'Content-Type': 'application/json'
        }

        api_url = ADZUNA_API_URL.format(country=country)

        try:
            response = requests.get(api_url, params=params, headers=headers)
            response.raise_for_status()
            return Response(response.json(), status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
