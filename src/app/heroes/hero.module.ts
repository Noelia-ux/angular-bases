import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { PruebaComponent } from './prueba/prueba.component';




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
    PruebaComponent
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class HeroModule{


}
