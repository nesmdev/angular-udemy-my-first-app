import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss-second-child',
  template: `
    <p>
      ss-second-child works!
    </p>
  `,
  styles: [
  ]
})
export class SsSecondChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
