import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <hr />
    <div class="container container-fluid">
      <div class="row">
        <div class="col">
          <!-- <app-bform></app-bform> -->
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Main works!!';
}
