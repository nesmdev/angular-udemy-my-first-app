import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TypesComponent } from './test/types/types.component';
import { BformComponent } from './test/bform/bform.component';
import { NgForComponent } from './test/ng-for/ng-for.component';
import { NgIfComponent } from './test/ng-if/ng-if.component';
import { TestComponent } from './test/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    TypesComponent,
    BformComponent,
    NgForComponent,
    NgIfComponent,
    TestComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // bootstrap: [TestComponent],
})
export class AppModule {}
