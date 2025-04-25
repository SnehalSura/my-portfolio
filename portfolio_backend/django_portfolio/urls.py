from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework.routers import DefaultRouter


# Creating router object
router = DefaultRouter()

# Register AboutmeViewset with Router
router.register('aboutmeapi', views.AboutViewSet, basename='aboutme')
router.register('projectsapi', views.ProjectsViewSet, basename='projects')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),    
]
