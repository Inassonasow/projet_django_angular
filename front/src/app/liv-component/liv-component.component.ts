import { Component, OnInit } from '@angular/core';
import { SerLivresService } from '../services/ser-livres.service';
import { CommonModule } from '@angular/common'; // Importation du module commun
@Component({
  selector: 'app-liv-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liv-component.component.html',
  styleUrl: './liv-component.component.css'
})
export class LivComponentComponent implements OnInit {
  livres: any[] = []; // Tableau pour stocker les livres

  constructor(private livreService: SerLivresService) { }

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
}
