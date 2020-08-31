import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhsComponent } from './rhs.component';

describe('RhsComponent', () => {
  let component: RhsComponent;
  let fixture: ComponentFixture<RhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
