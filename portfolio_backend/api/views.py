from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Aboutme, Projects, ContactProfile
from .serializers import AboutmeSerializer, ProjectsSerializer, ContactProfileSerializer

# Create your views here.
class AboutViewSet(ModelViewSet):
    queryset = Aboutme.objects.all()
    serializer_class = AboutmeSerializer

class ProjectsViewSet(ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

class ContactProfileViewSet(ModelViewSet):
    queryset = ContactProfile.objects.all()
    serializer_class = ContactProfileSerializer
