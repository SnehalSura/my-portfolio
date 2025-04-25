from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
   

# Creating router object
router = DefaultRouter()

# Register AboutmeViewset with Router
router.register('aboutmeapi', views.AboutViewSet, basename='aboutme')
router.register('projectsapi', views.ProjectsViewSet, basename='projects')
router.register('contactProfileapi', views.ContactProfileViewSet, basename='ContactProfile')
router.register('contactFormapi', views.ContactFormViewSet, basename='contactForm')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),  
    path('api/resume/', views.ResumeDownloadView.as_view(), name='resume-download'),  
]

# Search the below thing later
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
 
