from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(null=True, blank=True)
    country = models.CharField(null=True, max_length=20)
    city = models.CharField(null=True, max_length=20)
    phone_number = models.CharField(null=True, max_length=20)
    sex = models.CharField(max_length=1)
    avatar = models.ImageField(upload_to='static/images/users', default='static/images/users/default_logo.png', verbose_name='Аватар')
    website_url = models.URLField(max_length=200)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()
