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
    "http://localhost:4200",  # <- autorise Angular à appeler ton API Django
]POUR PERMETTRE A DJANGO D'AUTORISER LES REQUETTE QUI VIENNENT DE ANGULAR
application Angular.