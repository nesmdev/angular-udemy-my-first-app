import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container">
      <h1>{{title}}!</h1>
      <h2>{{person.name +" "+ person.lastname}}</h2>
    </div>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = "Main works!!";
  person = {
    name: "John",
    lastname: "Doe"
  }
}
