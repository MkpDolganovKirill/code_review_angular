import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from "./pages/auth/auth.component";
import { MainComponent } from './pages/main/main.component';
import { HttpHelperService } from "./services/http-helper.service";
import { HeaderComponent } from './shared/header/header.component';
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./shared/material/material.module";
import { ReviewComponent } from './pages/main/pages/review/review.component';
import { UsersPageComponent } from './pages/main/pages/users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    HeaderComponent,
    UsersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
