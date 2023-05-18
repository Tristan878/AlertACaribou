import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllosCarouselComponent } from './allos-carousel.component';

describe('AllosCarouselComponent', () => {
  let component: AllosCarouselComponent;
  let fixture: ComponentFixture<AllosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllosCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
