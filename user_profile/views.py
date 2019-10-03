from django.shortcuts import render, redirect
from auth_app.views import check_auth
from django.contrib.auth.models import User

# Create your views here.
def show_profile(request):
    if check_auth(request):
        return render(request, 'profile.html')
    else:
        return redirect('/login')
