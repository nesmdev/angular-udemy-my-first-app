import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  template: `
    <p>examples works!</p>
    <div class="row">
      <div class="col-md-6">
        <h3>Parent to Child via ViewChild</h3>
        <app-vch-parent></app-vch-parent>
      </div>
      <div class="col-md-6">
        <h3>Parent to Child via Local Variable</h3>
        <app-lv-parent></app-lv-parent>
      </div>
    </div>
  `,
  styles: [],
})
export class ExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
