import random
import string

from django.core.management.base import BaseCommand

from users.models import User


class Command(BaseCommand):
    help = "Create superuser 'admin', 'test1', 'test2' users with password 'test'"

    def handle(self, *args, **options):
        print("Creating...")
        try:
            User.objects.create_superuser(
                username="admin",
                email="admin@example.com",
                password="test",
                first_name=generate_first_name(),
                last_name=generate_last_name(),
            )
            for i in range(50):
                User.objects.create_user(
                    username=f"test{i}",
                    email=f"test{i}@example.com",
                    password="test",
                    first_name=generate_first_name(),
                    last_name=generate_last_name(),
                )
        except Exception as e:
            print(f"Error: {e}")
        print("Done!")


def generate_first_name():
    return "".join(random.choices(string.ascii_lowercase, k=5)).capitalize()


def generate_last_name():
    return "".join(random.choices(string.ascii_lowercase, k=10)).capitalize()
