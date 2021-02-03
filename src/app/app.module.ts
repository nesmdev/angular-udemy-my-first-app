import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { MainComponent } from './main/main.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypesComponent } from './types/types.component';
import { BformComponent } from './bform/bform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    MainComponent,
    ButtonsComponent,
    TypesComponent,
    BformComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [MainComponent],
})
export class AppModule {}
