import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdProfComponent } from './upd-prof.component';

describe('UpdProfComponent', () => {
  let component: UpdProfComponent;
  let fixture: ComponentFixture<UpdProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
