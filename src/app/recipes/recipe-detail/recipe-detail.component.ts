import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <h4>Recipe Name</h4>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Manage Recipe
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">To Shopping List</a></li>
        <li><a class="dropdown-item" href="#">Edit Recipe</a></li>
        <li><a class="dropdown-item" href="#">Delete Recipe</a></li>
      </ul>

      <div class="img-parent">
        <img src="https://i.imgur.com/MK0OvYH.jpeg" alt="" class="img-fluid" />
      </div>
      <p>Recipe description</p>
      <p>Recipe ingredients</p>
    </div>
  `,
  styles: [
    `
      .img-parent {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
