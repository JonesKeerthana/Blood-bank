import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfaqComponent } from './adminfaq.component';

describe('AdminfaqComponent', () => {
  let component: AdminfaqComponent;
  let fixture: ComponentFixture<AdminfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
