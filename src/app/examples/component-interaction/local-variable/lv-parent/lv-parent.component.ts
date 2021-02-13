import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lv-parent',
  template: `
    <p>lv-parent works!</p>

    <input
      type="text"
      #message
      (change)="childComponent.getMessage(message)"
      class="form-control"
      placeholder="Write message..."
    />
    <button class="btn btn-primary" (click)="childComponent.count()">
      Count!!
    </button>
    <hr />
    <app-lv-child #childComponent></app-lv-child>
  `,
  styles: [],
})
export class LvParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
