import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <p>ng-for works!</p>
    <div
      class="item"
      *ngFor="
        let car of cars;
        let i = index;
        first as first;
        last as last;
        even as even;
        odd as odd;
        count as count
      "
      [ngClass]="{ first: first, last: last, even: even, odd: odd }"
    >
      {{ i + 1 }} | {{ car.color }} - {{ car.type }} <br />
      {{ car.registration }} | {{ count }}
      <hr />
    </div>
  `,
  styles: [
    `
      .item {
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
      }
      .even {
        background-color: blanchedalmond;
      }
      .odd {
        background-color: lavender;
      }

      .first {
        font-weight: bold;
      }

      .last {
        font-style: italic;
      }
    `,
  ],
})
export class NgForComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cars = [
    {
      color: 'purple',
      type: 'minivan',
      registration: new Date('2017-01-03'),
      capacity: 7,
    },
    {
      color: 'red',
      type: 'station wagon',
      registration: new Date('2018-03-03'),
      capacity: 5,
    },
    {
      color: 'red',
      type: 'cabrio',
      registration: new Date('2016-05-02'),
      capacity: 2,
    },
  ];
}
