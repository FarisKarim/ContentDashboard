from django.urls import path
from .views import UserRegistrationView, SomeEndpointView, CustomAuthToken


urlpatterns = [
    path('api/register/', UserRegistrationView.as_view(), name='user-register'),
    path('api/some_endpoint/', SomeEndpointView.as_view(), name='some-endpoint'),
    path('api/login/', CustomAuthToken.as_view()),
]