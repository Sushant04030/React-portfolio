from django.shortcuts import render, HttpResponse, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from .models import *
from .models import PersonalInfo, Project
from .serializers import *
from django.core.mail import send_mail, send_mass_mail
from django.template.loader import render_to_string



def home1(request):
    teamsBgImage = TeamsBgImage.objects.latest('_id')
    return render(request,'portapp/home.html',{'teamsBgImage':teamsBgImage})

# Create your views here.

@api_view(['GET'])
def getPersonalInfo(request):
    # personalInfo = PersonalInfo.objects.all()
    # print(type(personalInfo))
    # for personalinfo in personalInfo:
    personalInfo = PersonalInfo.objects.all().order_by('-_id')[0:1]
    serializer = PersonalInfoSerializer(personalInfo,many=True)
    return Response(serializer.data)


# @api_view(['GET'])
# def getTeamsBgImage(request):
#     teamsBgImage = list(TeamsBgImage.objects.all().order_by('-_id'))
#     for i in teamsBgImage:
#         serializer = TeamsBgImageSerializer(i,many=False)
#     return Response(serializer.data)

@api_view(['GET'])
def getTeamsBgImage(request):
    teamsBgImage = list(TeamsBgImage.objects.all().order_by('-_id'))[0]
    serializer = TeamsBgImageSerializer(teamsBgImage,many=False)
    # teamsBgImage = TeamsBgImage.objects.all().order_by('-_id')[0:1]
    return Response(serializer.data)

@api_view(['GET'])
def getServiceBgImage(request):
    serviceBgImage = list(ServiceBgImage.objects.all().order_by('-_id'))
    for i in serviceBgImage:
        serializer = ServiceBgImageSerializer(i,many=False)
    return Response(serializer.data)

    #### services ####
@api_view(['GET'])
def getServices(request):
    personalInfo = PersonalInfo.objects.all().order_by('-_id')[0:1]
    for personalinfo in personalInfo:
        services = Service.objects.filter(personalInfo=personalinfo)
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)

    #### teams #### 
@api_view(['GET'])
def getTeams(request):
    personalInfo = PersonalInfo.objects.all().order_by('-_id')[0:1]
    for personalinfo in personalInfo:
        teams = Team.objects.filter(personalInfo=personalinfo)
    serializer = TeamSerializer(teams, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getWriters(request):
    personalInfo = PersonalInfo.objects.all().order_by('-_id')[0:1]
    writers = Writer.objects.filter(personalInfo=personalInfo)
    serializer = WriterSerializer(writers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProjects(request):
    personalInfo = PersonalInfo.objects.all().order_by('-_id')[0:1]
    for personalinfo in personalInfo:
        projects = Project.objects.filter(personalInfo=personalinfo)
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProjectById(request,pk):
    
    # project = get_object_or_404(Project, _id=pk)
    project = Project.objects.filter(_id=pk)

    serializer = ProjectSerializer(project, many=True)
    
    return Response(serializer.data)


@api_view(['POST'])
def postContactMe(request):
    data = request.data
    personalInfo = PersonalInfo.objects.all().order_by('-_id')[0:1]
    for personalinfo in personalInfo:
        contactme = ContactMe.objects.create(
                personalInfo=personalinfo,
                firstName=data['firstName'],
                lastName=data['lastName'],
                email=data['email'],
                title=data['title'],
                address=data['address'],
                message=data['message'],
            )
        contactme.save()

        # email to the customer
        mail_subject = 'Your message was received successfully'
        message = ('Thank you for contacting I will reply to your email as soon as possible.')
        email = data['email']


        # email to yourself
        name = data['firstName'] + " " + data['lastName']
        mail_subject1 = 'You received a message from your portfolio'
        message1 = f"\n\tName: {name},\n\tEmail: {email},\n\tAddress: {data['address']},\n\tSubject: {data['title']},\n\tMessage: {data['message']}"


        email1 = (mail_subject, message, 'thakurisushant0403@gmail.com', [email])
        email2 = (mail_subject1, message1, 'thakurisushant0403@gmail.com', ['thakurisushant0403@gmail.com'])
        send_mass_mail((email1, email2), fail_silently=False)
        
    message = {'detail': 'message sent successfully. you have received an email please check you email inbox.' }
    return Response(message)