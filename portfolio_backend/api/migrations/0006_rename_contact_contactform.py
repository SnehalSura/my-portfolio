# Generated by Django 5.1.8 on 2025-04-25 13:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_contact'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Contact',
            new_name='ContactForm',
        ),
    ]
