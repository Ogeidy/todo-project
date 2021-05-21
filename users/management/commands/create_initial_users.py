from django.core.management.base import BaseCommand

from users.models import User


class Command(BaseCommand):
    help = "Create superuser 'admin', 'test1', 'test2' users with password 'test'"

    def handle(self, *args, **options):
        print("Creating...")
        User.objects.create_superuser(username="admin", email="admin@example.com", password="test")
        for i in range(2):
            User.objects.create_user(username=f"test{i}", email=f"test{i}@example.com", password="test")
        print("Done!")
