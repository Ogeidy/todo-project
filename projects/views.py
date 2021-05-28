from rest_framework.viewsets import ModelViewSet
from rest_framework import pagination

from projects import models, serializers


class ProjectPagination(pagination.LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectModelSerializer
    pagination_class = ProjectPagination


class NoteModelViewSet(ModelViewSet):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteModelSerializer
