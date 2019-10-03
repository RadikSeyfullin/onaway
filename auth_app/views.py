from django.shortcuts import render, redirect, render_to_response
from users.models import CustomUser
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.views.generic import View
from django.template.context_processors import csrf

# Create your views here.

def check_auth(a):
    if a.user.is_authenticated:
        return True
    else:
        return False

def show_login(request):
    return render(request, 'login.html', {'is_auth': check_auth(request)})

def login(request):
    args = {}
    args.update(csrf(request))
    email = request.POST['email']
    password = request.POST['password']
    user = authenticate(request, password=password, email=email)
    if user is not None:
        auth_login(request, user)
        args['success_msg'] = "You are successfuly logged in"
        return redirect('/profile/')
    else:
        has_error = "Logged in was failed. Check your username and password"
        return redirect('/login')

def register(request):
    username = request.POST['name']
    email = request.POST['email']
    password = request.POST['password']
    r_password = request.POST['r_password']
    l_f_name = username.split(' ')
    if len(l_f_name) <= 1:
        return redirect('/login')
    elif password == r_password:
        all = CustomUser.objects.all()
        for i in all:
            if email == i.email:
                has_error = "Registration was failed"
                return redirect('/login')
        CustomUser.objects.create_user(email, password, first_name=l_f_name[0].capitalize(), last_name=l_f_name[1].capitalize())
        user = authenticate(request, password=password, email=email)
        if user is not None:
            auth_login(request, user)
            has_error = "You are successfuly registered"
            return redirect('/profile/')
        else:
            has_error = "Registration was failed"
            return redirect('/login')
    else:
        has_error = "Registration was failed"
        return redirect('/login')

def logout(request):
    auth_logout(request)
    has_error = "Successfuly logged out"
    return redirect('/login')
