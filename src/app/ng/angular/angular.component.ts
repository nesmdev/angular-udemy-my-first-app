import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
    <p>
      angular works!
      <app-mission-control></app-mission-control>
    </p>
  `,
  styles: [],
})
export class AngularComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
