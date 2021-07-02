import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, '', this.powers[0], '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    const myHero = new Hero(
      42,
      'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover'
    );
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }
}
