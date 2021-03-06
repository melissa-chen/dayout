# Generated by Django 2.0.3 on 2018-04-01 06:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('services', '0002_tripitem_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='No Name', max_length=100)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trip', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='tripitem',
            name='owner',
        ),
        migrations.AddField(
            model_name='tripitem',
            name='trip',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='trip_items', to='services.Trip'),
            preserve_default=False,
        ),
    ]
