# Generated by Django 2.2.5 on 2019-10-04 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20191003_2333'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='avatar',
            field=models.ImageField(default='static/images/users/default_logo.png', upload_to='users', verbose_name='Аватар'),
        ),
    ]