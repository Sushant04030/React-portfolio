# Generated by Django 3.2.5 on 2022-07-23 05:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PersonalInfo',
            fields=[
                ('firstName', models.CharField(blank=True, max_length=200, null=True)),
                ('lastName', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('bgimage', models.ImageField(blank=True, null=True, upload_to='')),
                ('profileImage', models.ImageField(blank=True, null=True, upload_to='')),
                ('aboutDescrip', models.CharField(blank=True, max_length=200, null=True)),
                ('skillsDescrip', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('personalInfo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portapp.personalinfo')),
            ],
        ),
        migrations.CreateModel(
            name='Writer',
            fields=[
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('personalInfo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portapp.personalinfo')),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('firstName', models.CharField(blank=True, max_length=200, null=True)),
                ('lastName', models.CharField(blank=True, max_length=200, null=True)),
                ('positon', models.CharField(blank=True, max_length=200, null=True)),
                ('work', models.CharField(blank=True, max_length=200, null=True)),
                ('bgimage', models.ImageField(blank=True, null=True, upload_to='')),
                ('profileImage', models.ImageField(blank=True, null=True, upload_to='')),
                ('description', models.TextField(blank=True, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('personalInfo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portapp.personalinfo')),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('level', models.PositiveIntegerField(blank=True, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('personalInfo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portapp.personalinfo')),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('description', models.TextField(blank=True, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('personalInfo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portapp.personalinfo')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectImage',
            fields=[
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portapp.project')),
            ],
        ),
    ]
