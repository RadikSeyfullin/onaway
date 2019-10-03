from django.shortcuts import render, redirect
from authapp.views import check_auth
from django.contrib.auth.models import User
import os
from onaway.settings import BASE_DIR

# Create your views here.
def show_profile(request, message = None):
    if check_auth(request):
        first_name = request.user.first_name
        last_name = request.user.last_name
        full_name = request.user.first_name + " " + request.user.last_name
        name = first_name + " " + last_name if first_name and last_name else request.user.username
        avatar = str(request.user.userprofile.avatar)
        return render(request, 'profile.html', {'full_name': name, 'success_msg': message, 'avatar': avatar})
    else:
        return redirect('/login')
