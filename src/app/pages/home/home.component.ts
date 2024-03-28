import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  email: string = 'renathaoliveira096@gmail.com';

  frontend = true;
  design = true;
  concept = true;

  constructor() { }

  ngOnInit(): void {
  }

  openCloseSkills(skill: string) {
    if (skill === 'frontend') {
      this.frontend = !this.frontend;
    }

    if (skill === 'design') {
      this.design = !this.design;
    }

    if (skill === 'concept') {
      this.concept = !this.concept;
    }

  } 

}
