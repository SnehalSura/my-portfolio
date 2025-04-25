from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Aboutme, Projects, ContactProfile, ContactForm
from .serializers import AboutmeSerializer, ProjectsSerializer, ContactProfileSerializer, ContactFormSerializer
from django.http import FileResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.conf import settings
import os


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

class ContactFormViewSet(ModelViewSet):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer


class ResumeDownloadView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        try:
            # Specify the path to your resume file using BASE_DIR
            file_path = os.path.join(settings.BASE_DIR, 'resume_file', 'Snehal_Sura_8605396970 (7).pdf')
            
            # Check if the file exists
            if not os.path.exists(file_path):
                return Response({"error": "File not found."}, status=404)
            
            # Serve the file as a response
            return FileResponse(open(file_path, 'rb'), content_type='application/pdf', as_attachment=True, filename='snehal_sura_resume.pdf')
        except Exception as e:
            return Response({"error": str(e)}, status=500)