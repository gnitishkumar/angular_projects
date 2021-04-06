import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdprofileComponent } from './updprofile.component';

describe('UpdprofileComponent', () => {
  let component: UpdprofileComponent;
  let fixture: ComponentFixture<UpdprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
