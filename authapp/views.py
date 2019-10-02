from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.views.generic import View

# Create your views here.

def check_auth(a):
    if a:
        return True
    else:
        return False

def show_login(request):
    return render(request, 'login.html', {'is_auth': check_auth(request.user.is_authenticated)})

def login(request):
    username = request.POST['name']
    password = request.POST['password']
    user = authenticate(request, password=password, username=username)
    if user is not None:
        auth_login(request, user)
        has_error = "You are successfuly logged in"
        return render(request, 'login.html', {'is_auth': check_auth(request.user.is_authenticated), 'has_error': has_error})
    else:
        has_error = "Logged in was failed. Check your username and password"
        return render(request, 'login.html', {'is_auth': check_auth(request.user.is_authenticated), 'has_error': has_error})

def register(request):
    username = request.POST['name']
    email = request.POST['email']
    password = request.POST['password']
    user = User.objects.create_user(username, email, password)
    user = authenticate(request, password=password, username=username)
    if user is not None:
        auth_login(request, user)
        has_error = "You are successfuly registered"
        return render(request, 'login.html', {'is_auth': check_auth(request.user.is_authenticated), 'has_error': has_error})
    else:
        has_error = "Registration was failed"
        return render(request, 'login.html', {'is_auth': check_auth(request.user.is_authenticated), 'has_error': has_error})

def logout(request):
    auth_logout(request)
    has_error = "Successfuly logged out"
    return render(request, 'login.html', {'is_auth': check_auth(request.user.is_authenticated), 'has_error': has_error})
