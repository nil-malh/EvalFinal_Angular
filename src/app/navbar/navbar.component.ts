import {Component, Inject, OnInit} from '@angular/core';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from "@angular/common";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   value : IconDefinition = faMoon;
   classNavbar : string = 'navbar-dark';
   navbarType : string = 'no-deploy';

  ngOnInit() {
    let theme = localStorage.getItem('theme');
    if (this.value === faMoon && theme === 'dark') {
      this.value = faLightbulb;
      this.classNavbar = 'navbar-dark';
    } else {
      this.value = faMoon;
      this.classNavbar = 'navbar-light';
    }
  }


  constructor(@Inject(DOCUMENT) private document: Document) { }

  toggleTheme():void {

      this.document.body.classList.toggle('dark');
      this.document.body.classList.toggle('light');


      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        this.value = faLightbulb;
        this.classNavbar = 'navbar-dark';
      } else {
        localStorage.setItem('theme', 'light');
        this.value = faMoon;
        this.classNavbar = 'navbar-light';
      }


  }

    getThemeClass() {

     let theme = localStorage.getItem('theme');

      if (theme === 'dark') {
        return 'dark';
      } else {
        return 'light';
      }

    }

    toggleNavbar() {

      if (this.navbarType === 'no-deploy') {
        this.navbarType = 'deploy';
      } else {
        this.navbarType = 'no-deploy';
      }

    }



}
