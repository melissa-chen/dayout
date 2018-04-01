from django.db import models

class Trip(models.Model):
    owner = models.ForeignKey('auth.User', related_name='trip', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)


class TripItem(models.Model):
    trip = models.ForeignKey(Trip, related_name='trip_items', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, default='')
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
