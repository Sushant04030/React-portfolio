# Generated by Django 3.2.5 on 2022-07-24 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portapp', '0002_contactme'),
    ]

    operations = [
        migrations.AddField(
            model_name='personalinfo',
            name='address',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
