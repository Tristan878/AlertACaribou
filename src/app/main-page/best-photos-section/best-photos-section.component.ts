import { Component, OnInit } from '@angular/core';

interface Photo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-best-photos-section',
  templateUrl: './best-photos-section.component.html',
  styleUrls: ['./best-photos-section.component.css']
})
export class BestPhotosSectionComponent implements OnInit{
  translateX = 0;
  images = [
    { url: 'assets/best-photos/clean_walk.jpg', alt: 'Image 1' },
    { url: 'assets/best-photos/test.jpg', alt: 'Image 2' },
    { url: 'assets/best-photos/clean_walk.jpg', alt: 'Image 3' },
    { url: 'assets/best-photos/test.jpg', alt: 'Image 4' },
    { url: 'assets/best-photos/clean_walk.jpg', alt: 'Image 5' },
    { url: 'assets/best-photos/test.jpg', alt: 'Image 6' },
    { url: 'assets/best-photos/clean_walk.jpg', alt: 'Image 7' },
    { url: 'assets/best-photos/test.jpg', alt: 'Image 8' }
  ];

  visibleImages: any[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.updateVisibleImages();
    this.startCarousel();
  }

  updateVisibleImages(): void {
    const endIndex = this.currentIndex + 4;
    this.visibleImages = this.images.slice(this.currentIndex, endIndex);
  }

  startCarousel(): void {
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex + 4 > this.images.length) {
        this.currentIndex = 0;
      }
      this.updateVisibleImages();
    }, 2000);
  }

}
