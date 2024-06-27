import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumFormControlComponent } from './costum-form-control.component';

describe('CostumFormControlComponent', () => {
  let component: CostumFormControlComponent;
  let fixture: ComponentFixture<CostumFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumFormControlComponent]
    });
    fixture = TestBed.createComponent(CostumFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
