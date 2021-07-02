import json
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase
from mixer.backend.django import mixer

from users.models import User
from projects.models import Note, Project


class TestNoteViewSet(APITestCase):
    def test_get_list(self):
        User.objects.create_user("test", "test@test.com", "test")
        self.client.login(username="test", password="test")
        response = self.client.get("/api/notes/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client.logout()

    def test_edit_admin(self):
        author = User.objects.create_user("test", "test@test.com", "test")
        project = Project.objects.create(name="Test project", description="test")
        note = Note.objects.create(
            name="Test note",
            text="test",
            author=author,
            project=project,
            creation_date=timezone.now(),
            modification_date=timezone.now(),
            active=True,
        )

        User.objects.create_superuser("admin", "admin@admin.com", "admin123456")
        self.client.login(username="admin", password="admin123456")

        response = self.client.put(
            f"/api/notes/{note.id}/",
            {
                "name": "Another test note",
                "text": note.text,
                "creationDate": note.creation_date,
                "modificationDate": note.modification_date,
                "author": author.id,
                "project": project.id,
            },
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        note = Note.objects.get(id=note.id)
        self.assertEqual(note.name, "Another test note")
        self.client.logout()

    def test_edit_admin_mixer(self):
        note = mixer.blend(Note)

        User.objects.create_superuser("admin", "admin@admin.com", "admin123456")
        self.client.login(username="admin", password="admin123456")
        new_name = note.name + " another"
        response = self.client.put(
            f"/api/notes/{note.id}/",
            {
                "name": new_name,
                "text": note.text,
                "creationDate": note.creation_date,
                "modificationDate": note.modification_date,
                "author": note.author.id,
                "project": note.project.id,
            },
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        note = Note.objects.get(id=note.id)
        self.assertEqual(note.name, new_name)
        self.client.logout()

    def test_get_detail(self):
        note = mixer.blend(Note, name="Scarlet sails")
        User.objects.create_user("test", "test@test.com", "test")
        self.client.login(username="test", password="test")

        response = self.client.get(f"/api/notes/{note.id}/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_note = json.loads(response.content)
        self.assertEqual(response_note["name"], "Scarlet sails")
        self.client.logout()

    def test_get_detail_author(self):
        note = mixer.blend(Note, author__username="Test_55")
        User.objects.create_user("test", "test@test.com", "test")
        self.client.login(username="test", password="test")

        response = self.client.get(f"/api/notes/{note.id}/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_note = json.loads(response.content)
        self.assertEqual(response_note["author"]["username"], "Test_55")
        self.client.logout()
