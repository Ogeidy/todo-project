from rest_framework import viewsets
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
    serializer_class = UserModelSerializer
