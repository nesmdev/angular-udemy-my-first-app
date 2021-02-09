import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container">
      <div class="row">
        <app-header></app-header>
      </div>

      <div class="row nbody">
        <div class="col-md-12">
          <h1>Main works!!</h1>
          <div class="row">
            <div class="col-md-7">
              <app-recipes></app-recipes>
            </div>
            <div class="col-md-5">
              <app-shopping-list></app-shopping-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .nbody {
        margin-top: 80px;
        margin-bottom: 80px;
      }
    `,
  ],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
