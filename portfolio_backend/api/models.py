from django.db import models
from django.core.validators import RegexValidator


# Create your models here.
class Aboutme(models.Model):
    desc1 = models.CharField(max_length=400)
    desc2 = models.CharField(max_length=400)
    htmlCss = models.IntegerField()
    js = models.IntegerField()
    react = models.IntegerField()
    dj = models.IntegerField()
    sql = models.IntegerField()
    

class Projects(models.Model):
    name = models.CharField(max_length=100)
    short_desc = models.CharField(max_length=400)
    long_desc = models.CharField(max_length=600)
    gitLink = models.URLField(max_length=100)


class ContactProfile(models.Model):
    email = models.EmailField(max_length=100)
    loc = models.CharField(max_length=50)
    phone_regex = RegexValidator(
        regex = r'^\+?1?\d{9,15}$',
        message = "Phone number must be entered in the format: '+999999999'. Up to 12 digits allowed."
    )
    ph_no = models.CharField(
        validators = [phone_regex], 
        max_length = 15, 
        unique = True
    )

    img_alt = models.CharField(max_length=255)
    image = models.ImageField(upload_to='profileImage/')  # Path to store images


class ContactForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()


