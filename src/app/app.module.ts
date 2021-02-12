import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TypesComponent } from './test/types/types.component';
import { BformComponent } from './test/bform/bform.component';
import { NgForComponent } from './test/ng-for/ng-for.component';
import { NgIfComponent } from './test/ng-if/ng-if.component';
import { TestComponent } from './test/test/test.component';
import { MainComponent } from './main/main.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { Navbar2Component } from './header/navbar2/navbar2.component';
import { RecipeItem2Component } from './recipes/recipe-list/recipe-item2/recipe-item2.component';
import { RecipeItem3Component } from './recipes/recipe-list/recipe-item3/recipe-item3.component';
import { ParentComponent } from './test/parent/parent.component';
import { VendedorComponent } from './test/parent/vendedor/vendedor.component';
import { ClienteComponent } from './test/parent/cliente/cliente.component';
import { MissionControlComponent } from './ng/via-srv/mission-control/mission-control.component';
import { AstronautComponent } from './ng/via-srv/astronaut/astronaut.component';
import { AngularComponent } from './ng/angular/angular.component';
import { ReversePipe } from './shared/pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    BformComponent,
    NgForComponent,
    NgIfComponent,
    TestComponent,
    MainComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NavbarComponent,
    Navbar2Component,
    RecipeItem2Component,
    RecipeItem3Component,
    ParentComponent,
    VendedorComponent,
    ClienteComponent,
    MissionControlComponent,
    AstronautComponent,
    AngularComponent,
    ReversePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  // bootstrap: [MainComponent],
  bootstrap: [
    // AngularComponent,
    TestComponent,
  ],
})
export class AppModule {}
