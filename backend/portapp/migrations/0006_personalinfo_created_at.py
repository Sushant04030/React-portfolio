# Generated by Django 3.2.5 on 2022-07-25 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portapp', '0005_alter_personalinfo_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='personalinfo',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
