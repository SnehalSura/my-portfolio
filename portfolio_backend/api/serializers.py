from rest_framework import serializers
from .models import Aboutme, Projects

class AboutmeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aboutme
        # fields = [ 'id', 'desc', 'htmlCss', 'js', 'react', 'dj', 'sql']
        fields = '__all__'


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'
