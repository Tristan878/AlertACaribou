import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPhotosSectionComponent } from './best-photos-section.component';

describe('BestPhotosSectionComponent', () => {
  let component: BestPhotosSectionComponent;
  let fixture: ComponentFixture<BestPhotosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestPhotosSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestPhotosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
