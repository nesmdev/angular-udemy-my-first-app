import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <h1>XYZ</h1>
    <p>xyz works!</p>
    <button class="btn btn-primary" (click)="server = true">test</button>
    <p *ngIf="server; else noserver">Server created!</p>
    <ng-template #noserver>
      <p>No server!!</p>
    </ng-template>
  `,
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class NgIfComponent implements OnInit {
  server = false;
  constructor() {}

  ngOnInit(): void {}
}
