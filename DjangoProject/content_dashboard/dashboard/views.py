from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth.decorators import login_required

from .forms import CustomUserCreationForm 
from .models import CustomUser, Article

def signup_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('dashboard:signup')
    else:
        form = CustomUserCreationForm()

    return render(request, 'dashboard/signup.html', {'form': form})


