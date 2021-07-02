from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from users.views import UserModelViewSet
from projects.views import ProjectModelViewSet, NoteModelViewSet


router = DefaultRouter()
router.register("users", UserModelViewSet)
router.register(prefix=r"(?P<version>\d\.\d)/users", viewset=UserModelViewSet)
router.register("projects", ProjectModelViewSet)
router.register("notes", NoteModelViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include(router.urls)),
    path("api/auth-token/", views.obtain_auth_token),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
