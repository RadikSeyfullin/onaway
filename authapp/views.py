from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout

# Create your views here.
def show_login(request):
    is_auth = False
    if request.user.is_authenticated:
        is_auth = True
    else:
        is_auth = False
    return render(request, 'index.html', {'is_auth': is_auth})

def login(request):
    username = request.POST['name']
    password = request.POST['password']
    user = authenticate(request, password=password, username=username)
    if user is not None:
        auth_login(request, user)
        return redirect('/')
    else:
        return redirect('/login')

def register(request):
    username = request.POST['name']
    email = request.POST['email']
    password = request.POST['password']
    user = User.objects.create_user(username, email, password)
    user = authenticate(request, password=password, username=username)
    if user is not None:
        auth_login(request, user)
        return redirect('/')
    else:
        return redirect('/login')

def logout(request):
    auth_logout(request)
    return redirect('/login')
