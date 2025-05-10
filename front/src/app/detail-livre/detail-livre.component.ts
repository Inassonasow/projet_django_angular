import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerLivresService } from '../services/ser-livres.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-livre',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {
  livre: any;

  constructor(private route: ActivatedRoute, private livreService: SerLivresService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupère l'ID depuis l'URL
    if (id) {
      this.livreService.getLivreById(+id).subscribe(
        (data) => {
          this.livre = data; // Stocke les détails du livre
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails du livre :', error);
        }
      );
    }
  }
}