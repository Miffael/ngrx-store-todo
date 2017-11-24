import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeFiltersComponent } from './notice-filters.component';

describe('NoticeFiltersComponent', () => {
  let component: NoticeFiltersComponent;
  let fixture: ComponentFixture<NoticeFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
