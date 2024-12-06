import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Composant autonome

@NgModule({
  imports: [
    BrowserModule, // Module de base pour les applications Angular basées sur le navigateur
    [AppComponent],  // Composant autonome, ajouté via un tableau dans les imports
    // Other components...
  ],

  bootstrap: [], // Point d'entrée de l'application
  // Other configurations...
})
export class AppModule {}

