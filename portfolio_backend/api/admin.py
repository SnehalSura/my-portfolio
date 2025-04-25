from django.contrib import admin
from .models import Aboutme, Projects, ContactProfile, ContactForm

# Register your models here.

@admin.register(Aboutme)
class AboutmeAdmin(admin.ModelAdmin):
    list_display = ['id', 'desc1', 'desc2', 'htmlCss', 'js', 'react', 'dj', 'sql']

@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'desc' ]

@admin.register(ContactProfile)
class ContactProfileAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'loc', 'ph_no', 'img_alt', 'image']

@admin.register(ContactForm)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'message' ]
