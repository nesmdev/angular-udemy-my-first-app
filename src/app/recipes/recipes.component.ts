import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { Recipe2 } from './recipe2';

@Component({
  selector: 'app-recipes',
  template: `
    <div class="row">
      <div class="col-md-7">
        <app-recipe-list [recipes]="recipes"></app-recipe-list>
      </div>
      <div class="col-md-5">
        <app-recipe-detail></app-recipe-detail>
      </div>
    </div>
  `,
  styles: [],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  recipes: Recipe2[] = [
    new Recipe2(
      'Recipe1',
      `Aenean viverra sapien id hendrerit dictum. Etiam aliquet efficitur posuere.`,
      'https://i.imgur.com/MK0OvYH.jpeg'
    ),
    new Recipe2(
      'Recipe 2',

      'Curabitur ultrices, sapien nec porta luctus, erat mi pulvinar massa.',
      'https://i.imgur.com/dX68Lzo.jpeg'
    ),
    new Recipe2(
      'Recipe_3',
      `Suspendisse luctus, lacus non porta sodales, erat eros laoreet tortor.

      `.trim(),
      'https://i.imgur.com/WQBEVwX.jpeg'
    ),
  ];

  // recipes: Recipe[] = [
  //   new Recipe({
  //     name: 'Recipe1',
  //     description: `Aenean viverra sapien id hendrerit dictum. Etiam aliquet efficitur posuere.`,
  //     imagePath: 'https://i.imgur.com/MK0OvYH.jpeg',
  //   }),
  //   new Recipe({
  //     name: 'Recipe 2',
  //     description:
  //       'Curabitur ultrices, sapien nec porta luctus, erat mi pulvinar massa.',
  //     imagePath: 'https://i.imgur.com/dX68Lzo.jpeg',
  //   }),
  //   new Recipe({
  //     name: 'Recipe_3',
  //     description: `Suspendisse luctus, lacus non porta sodales, erat eros laoreet tortor.

  //     `.trim(),
  //     imagePath: 'https://i.imgur.com/WQBEVwX.jpeg',
  //   }),
  // ];
}
