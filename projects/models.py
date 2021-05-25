from django.db import models
from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=200)
    repository = models.URLField()
    contributors = models.ManyToManyField(User)


class Note(models.Model):
    name = models.CharField(max_length=32)
    text = models.TextField()
    author = models.ForeignKey(User, models.PROTECT)
    project = models.ForeignKey(Project, models.PROTECT)
    creation_date = models.DateTimeField()
    modification_date = models.DateTimeField()
    active = models.BooleanField()
