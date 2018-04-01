from django.contrib.auth.models import User

from services.models import TripItem, Trip
from rest_framework import serializers

class TripSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Trip
        fields = ('name', 'owner')

class TripItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = TripItem
        fields = ('title', 'longitude', 'latitude', 'trip')

class UserSerializer(serializers.ModelSerializer):
    trip_items = serializers.PrimaryKeyRelatedField(many=True, queryset=TripItem.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'trip_items')
