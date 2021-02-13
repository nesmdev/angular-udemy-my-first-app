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
import { LocalReferenceComponent } from './test/local-reference/local-reference.component';
import { LvChildComponent } from './examples/component-interaction/local-variable/lv-parent/lv-child/lv-child.component';
import { LvParentComponent } from './examples/component-interaction/local-variable/lv-parent/lv-parent.component';
import { VchParentComponent } from './examples/component-interaction/view-child/vch-parent/vch-parent.component';
import { VchChildComponent } from './examples/component-interaction/view-child/vch-parent/vch-child/vch-child.component';
import { IbChildComponent } from './examples/component-interaction/input-binding/ib-parent/ib-child/ib-child.component';
import { IbParentComponent } from './examples/component-interaction/input-binding/ib-parent/ib-parent.component';
import { EbChildComponent } from './examples/component-interaction/event-binding/eb-parent/eb-child/eb-child.component';
import { EbParentComponent } from './examples/component-interaction/event-binding/eb-parent/eb-parent.component';
import { ExamplesComponent } from './examples/examples.component';
import { SsFirstChildComponent } from './examples/component-interaction/services-subscription/ss-parent/ss-first-child/ss-first-child.component';
import { SsSecondChildComponent } from './examples/component-interaction/services-subscription/ss-parent/ss-second-child/ss-second-child.component';
import { SsParentComponent } from './examples/component-interaction/services-subscription/ss-parent/ss-parent.component';

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
    LocalReferenceComponent,
    LvChildComponent,
    LvParentComponent,
    VchParentComponent,
    VchChildComponent,
    IbChildComponent,
    IbParentComponent,
    EbChildComponent,
    EbParentComponent,
    ExamplesComponent,
    SsFirstChildComponent,
    SsSecondChildComponent,
    SsParentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  // bootstrap: [MainComponent],
  bootstrap: [
    // AngularComponent,
    // TestComponent,
    ExamplesComponent,
  ],
})
export class AppModule {}
