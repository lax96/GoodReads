import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGenreComponent } from './explore-genre.component';

describe('ExploreGenreComponent', () => {
  let component: ExploreGenreComponent;
  let fixture: ComponentFixture<ExploreGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
