import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAtributoComponent } from './diretivas-atributo.component';

describe('DiretivasAtributoComponent', () => {
  let component: DiretivasAtributoComponent;
  let fixture: ComponentFixture<DiretivasAtributoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasAtributoComponent]
    });
    fixture = TestBed.createComponent(DiretivasAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
