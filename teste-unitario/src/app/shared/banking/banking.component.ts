import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent {

  private savings: number = 10;
  private balance: number = 50;

  constructor() { }

  public get getSavings() { return this.savings; }

  public get getBalance() { return this.balance; }

  private set setSavings(value: number) { this.savings = value; }

  private set setBalance(value: number) { this.balance = value; }

  public withdrawMoney(value: string): number | undefined {
    const withdrawAmount: number = Number(value);
    
    if (
      isNaN(withdrawAmount) || this.getSavings < withdrawAmount || withdrawAmount < 0
     ) {
      return ;
    }

    this.setSavings = this.getSavings - withdrawAmount;
    return this.setBalance = this.getBalance + withdrawAmount;
  }

  public depositMoney(value: string): number | undefined {
    const depositAmount: number = Number(value);

    if (
      isNaN(depositAmount) || this.getBalance < depositAmount || depositAmount < 0
    ) {
      return ;
    }

    this.setBalance = this.getBalance - depositAmount;
    return this.setSavings = this.getSavings + depositAmount;
  }
}