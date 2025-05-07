import { Component } from '@angular/core';
import { LivComponentComponent } from './liv-component/liv-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LivComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
