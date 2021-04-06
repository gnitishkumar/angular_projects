import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchRatesComponent } from './exch-rates.component';

describe('ExchRatesComponent', () => {
  let component: ExchRatesComponent;
  let fixture: ComponentFixture<ExchRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
