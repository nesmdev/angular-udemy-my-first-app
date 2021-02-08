import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  template: ` <p>{{ person.name }} - {{ person.age }} - {{ person.dni }}</p> `,
  styles: [],
})
export class TypesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  country: string = 'USA';
  igv: number = 0.18;
  person: Person = {
    name: 'John',
    age: 30,
    dni: '12345',
  };
}

interface Person {
  name: string;
  age: number;
  dni?: string;
}
