import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from "./profile-routing.module";
import { CreateRepositoryComponent } from './components/create-repository/create-repository.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormHelperService } from "../../../../services/form-helper.service";
import { MaterialModule } from "../../../../shared/material/material.module";
import { CommonModule } from "@angular/common";
import { RepositoriesListComponent } from './components/repositories-list/repositories-list.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CreateRepositoryComponent,
    RepositoriesListComponent
  ],
  imports: [
    ProfileRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    CommonModule
  ],
  providers: [FormHelperService],
})
export class ProfileModule { }
