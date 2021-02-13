import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div class="row ">
      <div class="col-md-12">
        <p>test works!</p>
        <!-- <app-tienda></app-tienda> -->
        <app-local-reference></app-local-reference>
      </div>
    </div>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
