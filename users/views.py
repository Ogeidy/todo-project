from rest_framework import viewsets, permissions
from rest_framework import mixins

from .models import User
from .serializers import UserModelSerializer


class UserModelViewSet(
    viewsets.GenericViewSet,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserModelSerializer
