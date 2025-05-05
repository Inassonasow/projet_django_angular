from django.shortcuts import render
from .serializers import LivreSerializer
from rest_framework import viewsets
from .models import Livre


class LivreViewSet(viewsets.ModelViewSet):
    queryset=Livre.objects.all()
    serializer_class =LivreSerializer
# Create your views here.
