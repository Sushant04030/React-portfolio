from django.urls import path
from . import views

urlpatterns = [
    path('', views.home1 , name='home'),

    path('api/personalInfo/', views.getPersonalInfo , name='getPersonalInfo'),
    path('api/writers/', views.getWriters , name='getWriters'),
    path('api/teams/', views.getTeams , name='getTeams'),
    path('api/teamsBgImage/', views.getTeamsBgImage , name='getTeamsBgImage'),
    path('api/services/', views.getServices , name='getServices'),
    path('api/serviceBgImage/', views.getServiceBgImage , name='getServiceBgImage'),
    path('api/projects/', views.getProjects , name='getProjects'),
    path('api/projects/<int:pk>/', views.getProjectById , name='getProjectById'),
    path('api/contactMe/', views.postContactMe , name='postContactMe'),
]