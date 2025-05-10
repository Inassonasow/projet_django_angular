import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import correct de HttpClient
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel
import { SerLivresService } from '../services/ser-livres.service'; // Importer le service
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-ajouter-livre',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterLink], // Ajout de FormsModule pour le binding des formulaires
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.css'] // Correction de "styleUrl" en "styleUrls"
})
export class AjouterLivreComponent {
  livre = {
    titre: '',
    auteur: '',
    date_publication: '',
    resume: '',
    isbn: '',
    disponible: ''
  };

  
constructor(private livreService: SerLivresService) {} // Inject du service
  ajouterLivre() {
    

    this.livreService.ajouterLivre(this.livre).subscribe(
      response => {
        console.log('Livre ajouté avec succès', response);
        // sa renitialise le formulaire
        this.livre = { titre: '', auteur: '', date_publication: '', resume: '', isbn: '', disponible: '' };
      },
      error => {
        console.error('Erreur lors de l\'ajout du livre', error);
      }
    );
    
  }
}