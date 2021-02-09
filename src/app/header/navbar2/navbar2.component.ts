import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  template: `
    <nav
      class="navbar navbar-dark fixed-top navbar-expand-lg"
      style="background-color: #6c757d;"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Recipe Book</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" *ngFor="let item of items">
              <a class="nav-link" [href]="item.url">{{ item.name }}</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Save Data</a></li>
                <li><a class="dropdown-item" href="#">Fetch Data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .nright {
        margin-right: 0px;
        color: red !important;
        background-color: yellow !important;
      }
    `,
  ],
})
export class Navbar2Component implements OnInit {
  constructor() {}
  items = [
    { name: 'Home', url: '/' },
    { name: 'Shopping List', url: '#' },
    { name: 'Recipes', url: '#' },
  ];
  ngOnInit(): void {}
}
