# projet_django_angular
CE PROJET EST FAIS POUR pour gérer une liste de livres.
1. CREATION  API ET JE L'AI TESTER DANS POSTMAN


2. DEUXIEMENT J'AI INSTALLER UN PACKAGE: django-cors-headers.
est utilisé pour autoriser les échanges entre l'API Django (backend) et l'application Angular (frontend), qui tournent sur des ports différents. Cela active le CORS (Cross-Origin Resource Sharing).
Sans cette configuration, Angular ne pourrait pas accéder aux données de l'API Django.


3.J'E L'AI AJOUTER DANS SETTING.PY DANS INSTALL APP

4.Ajouter 'corsheaders.middleware.CorsMiddleware' 
dans MIDDLEWARE

5.ENSUITE J'AI ConfigureR CORS AVEC CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",  # <- autorise Angular à appeler API Django
]POUR PERMETTRE A DJANGO D'AUTORISER LES REQUETTE QUI VIENNENT DE ANGULAR
application Angular.

6. installation du projet angular avec la commande ng new ((front nom du projet))

7. j'importe HttpClientModule dans app.config.ts et ajouter proviHttpClient dans provider pour  activer HttpClient

8.1 Créer un service Angular pour l'API : fichier ts pour logique pour interagir avec l'API. et service.spec.ts pour la configuration pour effectuer des appels http vers L'API django

8.2 configurations du services: configuration de ser_livres.ts pour effectuer des appels HTTP vers votre API Django. : @angular/core : Le décorateur @Injectable est importé depuis Angular. Il permet de marquer cette classe comme un service injectable dans d'autres parties de l'application.
HttpClient : Ce module est utilisé pour effectuer des requêtes HTTP (GET, POST, PUT, DELETE, etc.) vers une API ou un serveur.
Observable : Une classe de la bibliothèque rxjs qui permet de gérer les données asynchrones (comme les réponses des requêtes HTTP).
