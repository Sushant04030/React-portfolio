# Generated by Django 3.2.5 on 2022-07-24 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portapp', '0003_personalinfo_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personalinfo',
            name='aboutDescrip',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='skillsDescrip',
            field=models.TextField(blank=True, null=True),
        ),
    ]