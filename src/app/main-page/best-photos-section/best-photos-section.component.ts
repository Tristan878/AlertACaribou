import { Component } from '@angular/core';

interface Photo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-best-photos-section',
  templateUrl: './best-photos-section.component.html',
  styleUrls: ['./best-photos-section.component.css']
})
export class BestPhotosSectionComponent {
  photos: Photo[] = [
    { src: 'assets/best-photos/clean_walk.jpg', alt: 'Photo 1' },
    { src: 'photo2.jpg', alt: 'Photo 2' },
    { src: 'photo3.jpg', alt: 'Photo 3' }
  ];

}
