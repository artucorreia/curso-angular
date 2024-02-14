import { Component } from '@angular/core';

// Model
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  public investiments: Investiments[] = [];

  constructor(private listInvestimentsService: ListInvestimentsService) { }

  ngOnInit() {
    this.listInvestimentsService.listInvestiments().subscribe({
      next: (listInvestiments) => this.investiments = listInvestiments,
      error: error => console.log(error)
    });
  }
}
