import { Component, Input, OnInit } from '@angular/core';
import { Recipe2 } from '../../recipe2';

@Component({
  selector: 'app-recipe-item3',
  template: `
    <a
      href="#"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
      <div class="flex-column">
        <h5>{{ recipe.name }}</h5>
        <p>{{ recipe.description }}</p>
      </div>
      <div class="image-parent">
        <img src="{{ recipe.imagePath }}" class="img-fluid" alt="quixote" />
      </div>
    </a>
  `,
  styles: [
    `
      .image-parent {
        max-width: 100%;
      }
    `,
  ],
})
export class RecipeItem3Component implements OnInit {
  constructor() {}
  @Input() recipe: Recipe2;
  ngOnInit(): void {}
}
