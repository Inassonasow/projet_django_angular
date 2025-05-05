from django.db import models

class Livre(models.Model):
    titre = models.CharField(max_length=200)
    auteur = models.CharField(max_length=200)
    date_publication = models.DateField()
    resume = models.TextField()
    isbn = models.CharField(max_length=13, unique=True)
    disponible = models.BooleanField(default=True)

    def __str__(self):
        return self.titre


# Create your models here.
