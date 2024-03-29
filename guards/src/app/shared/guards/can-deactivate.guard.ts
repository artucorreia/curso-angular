import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Component
import { AccountComponent } from '../pages/account/account.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard {
  canDeactivate(
    component: AccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
    console.log(currentRoute);
    console.log(currentState);
    console.log(nextState);
    return component.exit();
  }
  
}
