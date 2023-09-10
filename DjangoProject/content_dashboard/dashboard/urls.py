from django.urls import path
from .views import UserRegistrationView, CustomAuthToken, CompanyViewSet, JobOpeningViewSet, AdzunaJobsViewSet, UserProfileAPIView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'job_openings', JobOpeningViewSet,basename='jobopenings')

urlpatterns = [
    path('api/register/', UserRegistrationView.as_view(), name='user-register'),
    path('api/login/', CustomAuthToken.as_view()),
    path('adzuna-jobs/', AdzunaJobsViewSet.as_view({'get': 'fetch_jobs'}), name='adzuna-jobs-fetch_jobs'),
    path('user-profile/', UserProfileAPIView.as_view(), name='user-profile'),


    *router.urls,
]