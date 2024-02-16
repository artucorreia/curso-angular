import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente Pages
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';
import { CanActivateGuard } from './shared/guards/can-activate.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch:'full'
  },
  {
    path: 'account', component: AccountComponent, canActivate: [CanActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
