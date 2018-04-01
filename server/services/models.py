from django.db import models

class TripItem(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
