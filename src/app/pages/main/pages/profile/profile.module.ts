import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "../../main.component";

@NgModule({
  declarations: [
    ProfileComponent,
    MainComponent
  ],
  imports: [MainRoutingModule],
  providers: [],
})
export class ProfileModule { }
