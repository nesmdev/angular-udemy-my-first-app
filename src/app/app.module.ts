import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, XyzComponent, MainComponent],
  imports: [BrowserModule],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [MainComponent],
})
export class AppModule {}
