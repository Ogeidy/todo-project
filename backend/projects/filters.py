from django_filters import rest_framework as filters
from projects import models


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr="contains")

    class Meta:
        model = models.Project
        fields = ["name"]


class NoteFilter(filters.FilterSet):
    creation_date_lt = filters.DateTimeFilter(
        field_name="creation_date", lookup_expr="lt"
    )
    creation_date_gt = filters.DateTimeFilter(
        field_name="creation_date", lookup_expr="gt"
    )

    class Meta:
        model = models.Note
        fields = ["project"]
