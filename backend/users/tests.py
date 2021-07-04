from django.test import TestCase
from rest_framework import status
from rest_framework.test import (
    APIRequestFactory,
    force_authenticate,
    APIClient,
)
from .views import UserModelViewSet
from .models import User


class TestUserViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get("/api/users/")
        user = User.objects.create_user("test", "test@test.com", "test")
        force_authenticate(request, user)
        view = UserModelViewSet.as_view({"get": "list"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_as_guest(self):
        factory = APIRequestFactory()
        request = factory.post(
            "/api/users/",
            {"username": "Pushkin", "email": "pushkin@example.com", "password": "test"},
            format="json",
        )
        view = UserModelViewSet.as_view({"post": "create"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_as_admin(self):
        factory = APIRequestFactory()
        request = factory.post(
            "/api/users/",
            {"username": "Pushkin", "email": "pushkin@example.com", "password": "test"},
            format="json",
        )
        admin = User.objects.create_superuser("admin", "admin@admin.com", "admin123456")
        force_authenticate(request, admin)
        view = UserModelViewSet.as_view({"post": "create"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):
        user = User.objects.create_user("test", "test@test.com", "test")
        client = APIClient()
        client.login(username="test", password="test")
        response = client.get(f"/api/users/{user.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        client.logout()

    def test_edit_as_guest(self):
        user = User.objects.create_user("test", "test@test.com", "test")
        client = APIClient()
        response = client.put(
            f"/api/users/{user.id}/",
            {"username": "Pushkin", "email": "pushkin@example.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_edit_as_admin(self):
        user = User.objects.create_user("test", "test@test.com", "test")
        client = APIClient()
        User.objects.create_superuser("admin", "admin@admin.com", "admin123456")
        client.login(username="admin", password="admin123456")
        response = client.put(
            f"/api/users/{user.id}/",
            {"username": "Pushkin", "email": "pushkin@example.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user = User.objects.get(id=user.id)
        self.assertEqual(user.username, "Pushkin")
        self.assertEqual(user.email, "pushkin@example.com")
        client.logout()
