import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'app-recipe-item',
  template: `
    <li
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
      <div class="row">
        <div class="col-md-6">
          <h5>{{ recipe.data.name }}</h5>
          <p>
            {{ recipe.data.description }}
          </p>
        </div>
        <div class="col-md-6">
          <div class="image-parent">
            <img
              [src]="recipe.data.imagePath"
              class="img-fluid"
              [alt]="recipe.data.name"
            />
          </div>
        </div>
      </div>
    </li>
  `,
  styles: [
    `
      .image-parent {
        max-width: 100%;
      }
    `,
  ],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  @Input() recipe: Recipe;
  ngOnInit(): void {}
}
