import { Component, OnInit } from '@angular/core';
import { SerLivresService } from '../services/ser-livres.service';
import { CommonModule } from '@angular/common'; // Importation du module commun
import { Router } from '@angular/router';
@Component({
  selector: 'app-liv-component',
  standalone: true,
  imports: [CommonModule,], // Ajout de CommonModule pour les directives Angular
  templateUrl: './liv-component.component.html',
  styleUrl: './liv-component.component.css'
})
export class LivComponentComponent implements OnInit {
  livres: any[] = []; // Tableau pour stocker les livres

  constructor(private livreService: SerLivresService,private router: Router) { }

  ngOnInit(): void {
    // Appel du service pour récupérer les livres
    this.livreService.getLivres().subscribe(
      (data) => {
        this.livres = data; // Stocke les données dans le tableau
        console.log(this.livres); // Affiche les données dans la console
      },
      (error) => {
        console.error('Erreur lors de la récupération des livres :', error);
      }
    );
  }

  chargerLivres(): void {
    this.livreService.getLivres().subscribe(
      (data) => {
        this.livres = data; // Stocke les données dans le tableau
        console.log(this.livres); // Affiche les données dans la console
      },
      (error) => {
        console.error('Erreur lors de la récupération des livres :', error);
      }
    );
  }


  supprimerLivre(id: number): void {
    this.livreService.supprimerLivre(id).subscribe(
      () => {
        console.log(`Livre avec l'ID ${id} supprimé`);
        this.chargerLivres(); // Recharger la liste après suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression du livre :', error);
      }
    );
  }

  modifierLivre(livre: any): void {
  this.router.navigate(['/modifier-livre', livre.id]); // Redirige vers le formulaire de modification
}
  
}
