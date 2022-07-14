import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./pages/auth/auth.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main', component: MainComponent, children: [
      {
        path: '**',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/main/pages/profile/profile.module').then((module) => module.ProfileModule)
      }
    ]
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
