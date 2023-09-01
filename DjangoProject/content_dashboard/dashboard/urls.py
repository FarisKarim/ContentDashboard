from django.urls import path
from .views import UserRegistrationView, SomeEndpointView, CustomAuthToken, CompanyViewSet, JobOpeningViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'job_openings', JobOpeningViewSet,basename='jobopenings')

urlpatterns = [
    path('api/register/', UserRegistrationView.as_view(), name='user-register'),
    path('api/login/', CustomAuthToken.as_view()),
    *router.urls,
]