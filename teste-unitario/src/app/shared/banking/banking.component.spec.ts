import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // getters

  it('(U) getSavings(): should have savings = 10', () => {
    expect(component.getSavings).toEqual(10);
  });
  
  it('(U) getBalace(): should have balance = 50', () => {
    expect(component.getBalance).toEqual(50);
  });

  // function withdrawMoney()

  it('(U) withdrawMoney(): should have return = undefined', () => {
    expect(component.withdrawMoney('10a')).toBe(undefined);
    expect(component.withdrawMoney('-10')).toBe(undefined);
  });

  it('(U) withdrawMoney(): should transfer from savings to balance', () => {
    component.withdrawMoney('10');
    expect(component.getSavings).toEqual(0);
    expect(component.getBalance).toEqual(60);
  });

  // function depositMoney

  it('(U) depositMoney(): should have return = undefined', () => {
    expect(component.depositMoney('10a')).toBe(undefined);
    expect(component.depositMoney('-10')).toBe(undefined);
  });

  it('(U) depositMoney(): should transfer from balance to savings', () => {
    component.depositMoney('50');
    expect(component.getBalance).toEqual(0)    
    expect(component.getSavings).toEqual(60)    
  });

  // interface
  it('(I) depositMoney() should transfer from Balance to Savings', () => {
    const element = fixture.debugElement.nativeElement; 
    element.querySelector('#input-balance').value = '10';
    element.querySelector('#deposit').click();

    fixture.detectChanges();
    
    expect(element.querySelector('#get-savings').textContent).toEqual('20');
    expect(component.getBalance).toEqual(40)
  });

  it('(I) withdrawMoney() should transfer from Savings to Balance', () => {
    const element = fixture.debugElement.nativeElement; 
    element.querySelector('#input-savings').value = '10';
    element.querySelector('#withdraw').click();

    fixture.detectChanges();
    
    expect(element.querySelector('#get-balance').textContent).toEqual('60');
    expect(component.getSavings).toEqual(0)
  });

});
