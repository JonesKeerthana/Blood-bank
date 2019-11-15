import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecusComponent } from './pagecus.component';

describe('PagecusComponent', () => {
  let component: PagecusComponent;
  let fixture: ComponentFixture<PagecusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
