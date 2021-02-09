import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { Recipe2 } from '../../recipe2';

@Component({
  selector: 'app-recipe-item2',
  template: `
    <a
      href="#"
      class="list-group-item clearfix list-group-item-action"
      title="{{ recipe.name }}"
    >
      <div class="row">
        <div class="col-md-7">
          <h5 class="list-group-item-heading">{{ recipe.name }}</h5>
          <p class="list-group-item-text">
            {{ recipe.description }}
          </p>
        </div>
        <div class="col-md-5">
          <img
            [src]="recipe.imagePath"
            alt="{{ recipe.name }}"
            class="img-fluid"
            style="max-width:100%"
          />
        </div>
      </div>
    </a>
  `,
  styles: [],
})
export class RecipeItem2Component implements OnInit {
  constructor() {}
  @Input() recipe: Recipe2;
  ngOnInit(): void {}
}
