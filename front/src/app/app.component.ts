import { Component } from '@angular/core';
import { LivComponentComponent } from './liv-component/liv-component.component';
import { RouterOutlet } from '@angular/router';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LivComponentComponent,LivComponentComponent,DetailLivreComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
