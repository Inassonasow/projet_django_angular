import { Component } from '@angular/core';
import { LivComponentComponent } from './liv-component/liv-component.component';
import { RouterOutlet } from '@angular/router';
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LivComponentComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
