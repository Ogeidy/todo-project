from django_filters import rest_framework as filters
from projects import models


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr="contains")

    class Meta:
        model = models.Project
        fields = ["name"]
