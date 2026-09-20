import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  premierNombre: number | null = null;
  secondNombre: number | null = null;
  resultat: number | string = '';

  calculer(operation: '+' | '-' | '*' | '/'): void {
    const a = this.premierNombre ?? 0;
    const b = this.secondNombre ?? 0;

    switch (operation) {
      case '+':
        this.resultat = a + b;
        break;
      case '-':
        this.resultat = a - b;
        break;
      case '*':
        this.resultat = a * b;
        break;
      case '/':
        this.resultat = b === 0 ? 'Erreur' : a / b;
        break;
    }
  }
}
