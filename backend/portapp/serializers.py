from rest_framework import serializers
from .models import *

from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework.authtoken.models import Token


class ServiceBgImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceBgImage
        fields = '__all__'

class TeamsBgImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamsBgImage
        fields = '__all__'

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    projectimages = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

    def get_projectimages(self, obj):
        reviews = obj.projectimage_set.all()
        serializer = ProjectImageSerializer(reviews, many=True)
        return serializer.data


class WriterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Writer
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'


# class PersonalInfoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PersonalInfo
#         fields = '__all__'


class PersonalInfoSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = PersonalInfo
        fields = ('__all__')

    def get_skills(self, obj):
        skills = obj.skill_set.all()
        serializer = SkillSerializer(skills, many=True)
        return serializer.data