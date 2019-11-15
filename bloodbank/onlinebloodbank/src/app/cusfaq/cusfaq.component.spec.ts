import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusfaqComponent } from './cusfaq.component';

describe('CusfaqComponent', () => {
  let component: CusfaqComponent;
  let fixture: ComponentFixture<CusfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
