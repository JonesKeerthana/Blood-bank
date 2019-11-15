import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookslothomeComponent } from './bookslothome.component';

describe('BookslothomeComponent', () => {
  let component: BookslothomeComponent;
  let fixture: ComponentFixture<BookslothomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookslothomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookslothomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
