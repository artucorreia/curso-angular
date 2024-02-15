import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Investiments } from '../../model/investiments';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { of } from 'rxjs/internal/observable/of';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;
  const mockList: Investiments[] = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    spyOn(service, 'listInvestiments').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.listInvestiments).toHaveBeenCalledWith();
    expect(component.investiments.length).toEqual(5);

    expect(component.investiments[0]).toEqual({name: 'Banco 1', value: 100});
    expect(component.investiments[4]).toEqual({name: 'Banco 5', value: 100});
  });

  it('(I) should list investiments', ()=> {
    spyOn(service, 'listInvestiments').and.returnValue(of(mockList));
    
    component.ngOnInit();
    fixture.detectChanges();

    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.item');

    expect(investiments.length).toEqual(5);
    expect(investiments[0].textContent.trim()).toContain('Banco 1 | 100');
    expect(investiments[4].textContent.trim()).toContain('Banco 5 | 100');
  });
});
