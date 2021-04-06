import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqClaimComponent } from './req-claim.component';

describe('ReqClaimComponent', () => {
  let component: ReqClaimComponent;
  let fixture: ComponentFixture<ReqClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
