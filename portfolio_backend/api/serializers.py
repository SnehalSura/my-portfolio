from rest_framework import serializers
from .models import Aboutme, Projects, ContactProfile

class AboutmeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aboutme
        fields = '__all__'


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'

class ContactProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactProfile
        fields = '__all__'
        
