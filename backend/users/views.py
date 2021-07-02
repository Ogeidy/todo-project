from rest_framework import viewsets, permissions
from rest_framework import mixins

from .models import User
from .serializers import UserModelSerializer, UserModelSerializerWithFullName, UserModelSerializerWithMetadata


class UserModelViewSet(
    viewsets.GenericViewSet,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    mixins.CreateModelMixin,
):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == "0.2":
            return UserModelSerializerWithFullName
        if self.request.version == "0.3":
            return UserModelSerializerWithMetadata
        return UserModelSerializer
