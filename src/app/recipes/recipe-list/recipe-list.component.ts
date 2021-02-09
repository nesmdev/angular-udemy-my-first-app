import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  template: `
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-primary">New Recipe</button>
        <hr />
        <ul class="  list-group ">
          <app-recipe-item3
            *ngFor="let recipe of recipes"
            [recipe]="recipe"
          ></app-recipe-item3>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() recipes: Recipe[];
}
