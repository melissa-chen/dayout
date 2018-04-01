from services.models import TripItem
from rest_framework import serializers

class TripItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripItem
        fields = ('title', 'longitude', 'latitude')