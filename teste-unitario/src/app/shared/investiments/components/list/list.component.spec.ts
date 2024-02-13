import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) shoul list investiments', () => {
    let investiments = component.investiments;
    expect(investiments).toBeTruthy();
    expect(investiments.length).toEqual(4);
    expect(investiments[0]).toEqual({name: 'Itaú', value: 100});
    expect(investiments[3]).toEqual({name: 'Inter', value: 100});
  });

  // it
});
