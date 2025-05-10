import { Routes } from '@angular/router';
import { AjouterLivreComponent } from './ajouter-livre/ajouter-livre.component';
import { LivComponentComponent } from './liv-component/liv-component.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';

export const routes: Routes = [
    {path:"chemindeajoutlivre",component:AjouterLivreComponent},
    { path: "detail-livre/:id", component: DetailLivreComponent }, // Route pour afficher les détails
    {path:"",component:LivComponentComponent},
    { path: "modifier-livre/:id", component: AjouterLivreComponent }, // Réutiliser AjouterLivreComponent pour la modification
];
