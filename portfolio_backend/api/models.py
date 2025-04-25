from django.db import models

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
    desc = models.CharField(max_length=600)