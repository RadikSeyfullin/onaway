from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_profile, name='profile'),
    path('edit/', views.show_edit_profile, name='ShowEditProfile'),
]
