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

9. changement du base de donnees sqlite en mysql


10.AJOut de livre a partir du front: ajout du view qui gere la creation du livre, ajout du view a url.py
    partie front: creation du composant ajouter_livre et creer le formulaire dans le html, ajout du logique dans le le service puis le ts


11: ajout de la methode supprimer et modifie
        _ajout du methode charger_livre dans liv_component pour  pour centraliser la logique de récupération des livres elle est utile pour éviter de dupliquer le code de récupération des livres.
        utilisatin de this.router.navigate en injectant le service router dans le constructeur (dans liv_component) et en fin ajouter la route modifier dans app route

12. creation du composant pour vor detail du livre:
    1.Ajoutez une méthode voirDetail dans le fichier liv-component.component.ts pour rediriger l'utilisateur vers une page de détail : voirDetail(id: number): void {
  this.router.navigate(['/detail-livre', id]); // Redirige vers la page de détail
}  2. ajout de route pour la page de détail
        Modifiez le fichier liv-component.component.html pour inclure un bouton Détail à côté de chaque livre :
         Ajouter la méthode voirDetail dans le TypeScript: voirDetail(id: number): void {
         this.router.navigate(['/detail-livre', id]); // Redirige vers la page de détail
    }
        . Ajouter la route dans app.routes.ts
        Ajouter une méthode getLivreById
        : Afficher les détails dans le HTML


