from rest_framework import serializers
from projects.models import Project, Note
from users.serializers import UserModelSerializer


class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class NoteModelSerializer(serializers.ModelSerializer):
    author = UserModelSerializer()

    class Meta:
        model = Note
        fields = "__all__"


class NoteModelSerializerBase(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = "__all__"
