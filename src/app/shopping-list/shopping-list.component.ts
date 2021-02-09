import { Component, OnInit } from '@angular/core';
import { Ingredient2 } from '../shared/ingredient2.model';

@Component({
  selector: 'app-shopping-list',
  template: `
    <div class="row">
      <div class="col-md-10">
        <app-shopping-list-edit></app-shopping-list-edit>
        <hr />
        <ul class="list-group list-striped">
          <a
            class="list-group-item list-group-item-action"
            *ngFor="let ingredient of ingredients; even as even"
            [ngClass]="{ even: even }"
            >{{ ingredient.name }} ({{ ingredient.amount }})
          </a>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      a {
        cursor: pointer;
      }

      /* .even { */
      /* background-color: yellow; */
      /* } */
      /* .amount {

        background: blue;
        color: white;
        text-align: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;

      } */
    `,
  ],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}

  ingredients: Ingredient2[] = [
    new Ingredient2('Apple', 10),
    new Ingredient2('Tomato', 5),
  ];

  ngOnInit(): void {}
}
