import { Component } from '@angular/core';

@Component({
  selector: 'app-allos-carousel',
  templateUrl: './allos-carousel.component.html',
  styleUrls: ['./allos-carousel.component.css'],
})
export class AllosCarouselComponent {
  photos: { url: string, title: string }[] = [
    { url: 'assets/allos/barman.png', title: 'Barman' },
    { url: 'assets/allos/beerpong.png', title: 'Beerpong' },
    { url: 'assets/allos/carwash.png', title: 'Carwash' },
    { url: 'assets/allos/karaoke.png', title: 'Karaoke' },
    { url: 'assets/allos/taxi.png', title: 'Taxi' }

  ];

  currentPhotoIndex = 0;

  selectPhoto(index: number) {
    // Mettez ici votre logique pour traiter la sélection d'une photo
    console.log('Photo sélectionnée :', this.photos[index]);
    this.currentPhotoIndex = index;
  }

  getIndicatorClass(index: number) {
    return index === this.currentPhotoIndex ? 'active' : '';
  }
}
