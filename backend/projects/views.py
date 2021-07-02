from rest_framework import viewsets, pagination, response, status, permissions

from projects import models, serializers, filters


class ProjectPagination(pagination.LimitOffsetPagination):
    default_limit = 10


class NotePagination(pagination.LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(viewsets.ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectModelSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = ProjectPagination
    filterset_class = filters.ProjectFilter


class NoteModelViewSet(viewsets.ModelViewSet):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteModelSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = NotePagination
    filterset_class = filters.NoteFilter

    def destroy(self, request, pk=None):
        note = models.Note.objects.get(pk=pk)
        note.active = False
        note.save()
        return response.Response(status=status.HTTP_200_OK)

    def get_serializer_class(self):
        if self.request.method in ["GET"]:
            return serializers.NoteModelSerializer
        return serializers.NoteModelSerializerBase
