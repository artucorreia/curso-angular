import { Injectable } from '@angular/core';
import { Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard {
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): 
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {

    if(segments[1]?.path === 'leads') { return true; }
    window.alert('Módulo não foi carregado.');
    return false;
  }
}
