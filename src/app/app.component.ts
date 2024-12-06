import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Toujours inclure CommonModule dans standalone components
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',

  standalone: true, // Indique que ce composant est autonome (standalone)

  imports: [CommonModule], // Importer les modules ou composants nécessaires
  templateUrl: './app.component.html', // Séparation des responsabilités (HTML externe)
  styleUrls: ['./app.component.css'] // Utilisation de fichiers de style externes
})
export class AppComponent {
  title: string = 'homes'; // Typage explicite pour les propriétés
}
