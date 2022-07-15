import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./pages/auth/auth.component";
import { MainComponent } from "./pages/main/main.component";
import { ReviewComponent } from "./pages/main/pages/review/review.component";
import { UsersPageComponent } from "./pages/main/pages/users-page/users-page.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main', component: MainComponent, children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `users`,
      },
      {
        path: 'profile/:userId',
        loadChildren: () => import('./pages/main/pages/profile/profile.module').then((module) => module.ProfileModule)
      },
      {
        path: 'review/:userId/:repositoryId',
        component: ReviewComponent,
      },
      {
        path: 'profile',
        redirectTo: `profile/${localStorage.getItem("userId")}`,
      },
      {
        path: 'users',
        component: UsersPageComponent,
      },
      {
        path: '**',
        redirectTo: 'profile',
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
