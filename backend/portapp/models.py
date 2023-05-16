from datetime import timezone
from django.db import models

# Create your models here.


class PersonalInfo(models.Model):
    firstName       = models.CharField(max_length=200, null=True, blank=True)
    lastName        = models.CharField(max_length=200, null=True, blank=True)
    address         = models.CharField(max_length=200, null=True, blank=True)
    email           = models.CharField(max_length=200, null=True, blank=True)
    description     = models.TextField(null=True, blank=True)
    bgimage         = models.ImageField(null=True, blank=True)
    profileImage    = models.ImageField(null=True, blank=True)
    aboutDescrip    =  models.TextField(null=True, blank=True)
    skillsDescrip   =  models.TextField(null=True, blank=True)
    created_at      = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)
    _id             = models.AutoField(primary_key=True)
    def __str__(self):
        return f'({self._id}) {self.firstName}'

    class Meta:
        get_latest_by = ['created_at']



class Skill(models.Model):
    personalInfo    = models.ForeignKey(PersonalInfo, on_delete=models.CASCADE)
    title           = models.CharField(max_length=200, null=True, blank=True)
    level           = models.PositiveIntegerField(null=True, blank=True)
    description     = models.CharField(max_length=200, null=True, blank=True)
    _id             = models.AutoField(primary_key=True)

    def __str__(self):
        return f'({self._id}) {self.title}'



class Writer(models.Model):
    personalInfo    = models.ForeignKey(PersonalInfo, on_delete=models.CASCADE)
    title           = models.CharField(max_length=200, null=True, blank=True)
    _id             = models.AutoField(primary_key=True)

    def __str__(self):
        return f'({self._id}) {self.title}'



class Service(models.Model):
    personalInfo    = models.ForeignKey(PersonalInfo, on_delete=models.CASCADE)
    title           = models.CharField(max_length=200, null=True, blank=True)
    image           = models.ImageField(null=True, blank=True)
    description     = models.TextField(blank=True, null=True)
    _id             = models.AutoField(primary_key=True)

    def __str__(self):
        return f'({self._id}) {self.title}'



class Team(models.Model):
    personalInfo    = models.ForeignKey(PersonalInfo, on_delete=models.CASCADE)
    firstName       = models.CharField(max_length=200, null=True, blank=True)
    lastName        = models.CharField(max_length=200, null=True, blank=True)
    positon         = models.CharField(max_length=200, null=True, blank=True)
    work            = models.CharField(max_length=200, null=True, blank=True)
    bgimage         = models.ImageField(null=True, blank=True)
    profileImage    = models.ImageField(null=True, blank=True)
    description     = models.TextField(null=True, blank=True)
    _id             = models.AutoField(primary_key=True)

    def __str__(self):
        return f'({self._id})  {self.firstName} {self.lastName} for {self.personalInfo.firstName} {self.personalInfo.lastName}'



class Project(models.Model):
    personalInfo    = models.ForeignKey(PersonalInfo, on_delete=models.CASCADE)
    title           = models.CharField(max_length=200, null=True, blank=True)
    description     = models.TextField(blank=True, null=True)
    image           = models.ImageField(null=True, blank=True)
    _id             = models.AutoField(primary_key=True)
    
    def __str__(self):
        return f'({self._id}) {self.title}'


class ServiceBgImage(models.Model):
    image           = models.ImageField(null=True, blank=True)
    _id             = models.AutoField(primary_key=True)
    
    def __str__(self):
        return f'({self._id})'

class TeamsBgImage(models.Model):
    image           = models.ImageField(null=True, blank=True)
    _id             = models.AutoField(primary_key=True)
    
    def __str__(self):
        return f'({self._id})'

class ProjectImage(models.Model):
    project         = models.ForeignKey(Project, on_delete=models.CASCADE)
    image           = models.ImageField(null=True, blank=True)
    title           = models.CharField(max_length=200, null=True, blank=True)
    _id             = models.AutoField(primary_key=True)

    def __str__(self):
        return f'({self._id}) {self.title}'


class ContactMe(models.Model):
    personalInfo    = models.ForeignKey(PersonalInfo, on_delete=models.CASCADE)
    firstName       = models.CharField(max_length=200, null=True, blank=True)
    lastName        = models.CharField(max_length=200, null=True, blank=True)
    email           = models.CharField(max_length=200, null=True,blank=True)
    title           = models.CharField(max_length=200, null=True, blank=True)
    message         = models.TextField(null=True, blank=True)
    address         = models.CharField(max_length=300,null=True, blank=True)
    _id             = models.AutoField(primary_key=True)

    def __str__(self):
        return f'({self._id}) {self.firstName} {self.title}'