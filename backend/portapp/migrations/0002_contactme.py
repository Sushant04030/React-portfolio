# Generated by Django 3.2.5 on 2022-07-23 14:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactMe',
            fields=[
                ('firstname', models.CharField(blank=True, max_length=200, null=True)),
                ('lastname', models.CharField(blank=True, max_length=200, null=True)),
                ('email', models.CharField(blank=True, max_length=200, null=True)),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('message', models.TextField(blank=True, null=True)),
                ('address', models.CharField(blank=True, max_length=300, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('personalInfo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portapp.personalinfo')),
            ],
        ),
    ]
