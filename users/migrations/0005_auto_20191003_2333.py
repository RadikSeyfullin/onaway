# Generated by Django 2.2.5 on 2019-10-03 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20191003_2320'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='phone_number',
            field=models.CharField(max_length=18, null=True, unique=True),
        ),
    ]
