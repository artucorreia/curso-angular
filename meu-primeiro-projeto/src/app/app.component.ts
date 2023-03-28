import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor () {

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
