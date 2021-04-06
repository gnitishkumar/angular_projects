import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustCareComponent } from './cust-care.component';

describe('CustCareComponent', () => {
  let component: CustCareComponent;
  let fixture: ComponentFixture<CustCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
