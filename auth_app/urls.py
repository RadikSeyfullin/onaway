from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.show_login, name="ShowLoginPage"),
    path('register', views.register, name="Register"),
    path('signin', views.login, name="Login"),
    path('logout', views.logout, name="Logout"),
]
