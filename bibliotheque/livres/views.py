from django.shortcuts import render
from .serializers import LivreSerializer
from rest_framework import viewsets
from .models import Livre
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny


class LivreViewSet(viewsets.ModelViewSet):
    queryset=Livre.objects.all()
    serializer_class =LivreSerializer


def ajouter_livre(request):
    if request.method == 'POST':
        serializer = LivreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
# Create your views here.
