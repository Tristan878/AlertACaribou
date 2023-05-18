import { Component } from '@angular/core';

@Component({
  selector: 'app-allos-carousel',
  templateUrl: './allos-carousel.component.html',
  styleUrls: ['./allos-carousel.component.css'],
})
export class AllosCarouselComponent {
  photos: { url: string, title: string }[] = [
    { url: 'assets/partenaires/intersport.svg', title: 'Photo 1' },
    { url: 'assets/partenaires/3brasseurs.png', title: 'Photo 2' },
    { url: 'assets/best-photos/clean_walk.jpg', title: 'Photo 3' },
    { url: 'assets/best-photos/clean_walk.jpg', title: 'Photo 3' },
    { url: 'assets/best-photos/clean_walk.jpg', title: 'Photo 3' }

  ];

  selectPhoto(index: number) {
    // Mettez ici votre logique pour traiter la sélection d'une photo
    console.log('Photo sélectionnée :', this.photos[index]);
  }
}
