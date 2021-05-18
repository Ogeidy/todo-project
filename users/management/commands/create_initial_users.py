from django.core.management.base import BaseCommand
from users.models import User


class Command(BaseCommand):
    help = "Create superuser 'admin', 'test1', 'test2' users with password 'test'"

    def handle(self, *args, **options):
        print("Creating...")

        admin = User(username="admin", email="admin@example.com", is_superuser=True, is_staff=True)
        admin.set_password("test")
        admin.save()
        for i in range(2):
            user = User(username=f"test{i}", email=f"test{i}@example.com")
            user.save()
        print("Done!")
