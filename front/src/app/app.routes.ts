import { Routes } from '@angular/router';
import { AjouterLivreComponent } from './ajouter-livre/ajouter-livre.component';

export const routes: Routes = [
    {path:"chemindeajoutlivre",component:AjouterLivreComponent},
    { path: "modifier-livre/:id", component: AjouterLivreComponent }, // Réutiliser AjouterLivreComponent pour la modification
];
