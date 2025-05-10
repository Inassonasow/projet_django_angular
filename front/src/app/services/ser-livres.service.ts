import { Injectable } from '@angular/core';// Ce décorateur indique que cette classe est un service Angular.
import { HttpClient } from '@angular/common/http';//Cela signifie que ce service est disponible dans toute l'application (au niveau global). Vous n'avez pas besoin de l'ajouter manuellement dans un module ou une configuration.
import { Observable } from 'rxjs'; //Une classe de la bibliothèque rxjs qui permet de gérer les données asynchrones (comme les réponses des requêtes HTTP).

@Injectable({
  providedIn: 'root'
})
export class SerLivresService {
  private apiUrl = 'http://127.0.0.1:8000/livre/'; // URL de l'API Django
  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les livres
  getLivres(): Observable<any> {
    console.log('Appel de getLivres'); // Vérifiez si ce message s'affiche
    return this.http.get(this.apiUrl);
  }

  // Méthode pour ajouter un livre
  ajouterLivre(livre: any): Observable<any> {
    console.log('Appel de ajouterLivre avec :', livre);
    return this.http.post(this.apiUrl, livre);
  }

  supprimerLivre(id: number): Observable<any> {
  const url = `${this.apiUrl}${id}/`; // URL pour supprimer un livre spécifique
  console.log('Appel de supprimerLivre avec ID :', id);
  return this.http.delete(url);
}

getLivreById(id: number): Observable<any> {
  const url = `${this.apiUrl}${id}/`; // URL pour récupérer un livre spécifique
  return this.http.get(url);
}

}
