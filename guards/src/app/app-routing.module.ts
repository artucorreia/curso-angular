import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente Pages
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';
import { CanActivateGuard } from './shared/guards/can-activate.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    pathMatch:'full'
  },
  {
    path: 'account', 
    component: AccountComponent, 
    canActivate: [CanActivateGuard], 
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
