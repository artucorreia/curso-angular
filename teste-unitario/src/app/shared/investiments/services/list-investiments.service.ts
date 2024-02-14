import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../model/investiments';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {

  private url: string = 
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private http: HttpClient) { }

  public listInvestiments(): Observable<Investiments[]> {
    return this.http.get<Investiments[]>(this.url).pipe(
      map(
        res => res
      ),
      error => error
    );
  }
}
