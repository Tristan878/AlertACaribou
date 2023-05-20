import { Component } from '@angular/core';

@Component({
  selector: 'app-allos-carousel',
  templateUrl: './allos-carousel.component.html',
  styleUrls: ['./allos-carousel.component.css'],
})
export class AllosCarouselComponent {
  currentIndex = 0;
  images = [
    {url: 'assets/allos/barman.png', alt: 'Barman'},
    {url: 'assets/allos/beerpong.png', alt: 'Beerpong'},
    {url: 'assets/allos/carwash.png', alt: 'Carwash'},
    {url: 'assets/allos/karaoke.png', alt: 'Karaoke'},
    {url: 'assets/allos/taxi.png', alt: 'Taxi'}

  ];
  goToPreviousImage() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }

  goToNextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
  }
}
