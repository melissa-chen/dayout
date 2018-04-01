from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from services.models import TripItem
from services.serializers import TripItemSerializer

@api_view(['GET', 'POST'])
def trip_item_list(request, format=None):
    """
    List all TripItems, or create a new TripItem.
    """
    if request.method == 'GET':
        trip_item_all = TripItem.objects.all()
        serializer = TripItemSerializer(trip_item_all, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TripItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def trip_item_detail(request, pk, format=None):
    """
    Retrieve, update or delete a TripItem.
    """
    try:
        trip_item = TripItem.objects.get(pk=pk)
    except TripItem.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TripItemSerializer(trip_item)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TripItemSerializer(trip_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        trip_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

