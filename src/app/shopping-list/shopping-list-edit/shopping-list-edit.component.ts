import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  template: `
    <form>
      <div class="row">
        <div class="col-md-9 form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="col-md-3 form-group">
          <label for="amount">Amount</label>
          <input type="number" class="form-control" id="amount" min="0" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <button class="btn btn-primary" type="submit">Add</button>
          <button class="btn btn-danger" type="button">Delete</button>
          <button class="btn btn-secondary" type="reset">Clear</button>
        </div>
      </div>
    </form>
  `,
  styles: [
    `
      button {
        margin: 1px;
        margin-top: 2px;
        /* padding: 10px; */
      }
      /* button:hover {
        padding-left: 15px;
        padding-right: 15px;
      } */
    `,
  ],
})
export class ShoppingListEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
