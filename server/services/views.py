from django.contrib.auth.models import User

from rest_framework import generics

from services.models import Trip, TripItem
from services.serializers import TripSerializer, TripItemSerializer, UserSerializer

class TripList(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class TripDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

class TripItemList(generics.ListCreateAPIView):
    queryset = TripItem.objects.all()
    serializer_class = TripItemSerializer

class TripItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TripItem.objects.all()
    serializer_class = TripItemSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer