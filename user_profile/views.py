from django.shortcuts import render, redirect
from auth_app.views import check_auth
from django.contrib.auth.models import User
from onw.settings import BASE_DIR as base_dir

# Create your views here.
def show_profile(request):
    if check_auth(request):
        return render(request, 'profile.html')
    else:
        return redirect('/login')

def show_edit_profile(request):
    if check_auth(request):
        return render(request, 'editprofile.html', {'base_dir': base_dir,})
    else:
        return redirect('/login')
