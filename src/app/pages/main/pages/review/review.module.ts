import { NgModule } from '@angular/core';

import { ReviewRoutingModule } from "./review-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormHelperService } from "../../../../services/form-helper.service";
import { MaterialModule } from "../../../../shared/material/material.module";
import { CommonModule } from "@angular/common";
import { ReviewComponent } from "./review.component";

@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    ReviewRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    CommonModule
  ],
  providers: [FormHelperService],
})
export class ReviewModule { }
