import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public valor: number;
  
  constructor () {
    this.valor = 1;
  }

  add(): number {
    return this.valor++;
  }

  ngDoCheck(): void { 
    console.log('ngDoCheck');
  }

  ngAfterContentIniti(): void { 
    console.log('ngAfterContentIniti');
  }

  ngAfterContentChecked(): void { 
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void { 
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void { 
    console.log('ngAfterViewChecked');
  }
}
