import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from "./profile-routing.module";
import { CreateRepositoryComponent } from './components/create-repository/create-repository.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CreateRepositoryComponent
  ],
  imports: [ProfileRoutingModule],
  providers: [],
})
export class ProfileModule { }
