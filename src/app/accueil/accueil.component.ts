import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {

  private text :string = 'Bienvenue sur thibzee.fr !' +
    ' Vous pouvez explorer mon projet de site web, qui utilise l\'api de ...' +
    ' en cliquant sur le bouton ci-dessous.';
  public textToShow :string = '';

  title :string = 'Accueil';
  value :string = 'hide';

  ngOnInit() {
    this.animateText();
    setTimeout(() => {
      this.value = 'show';
    }, 6000);

  }

  private animateText() {
    const textLength = this.text.length;
    let i = 0;
    setInterval(() => {
      if (i < textLength) {
        this.textToShow += this.text.charAt(i);
        i++;
      }
    }, 40);
  }


}
