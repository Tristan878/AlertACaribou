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
    { src: 'photo1.jpg', alt: 'Photo 1' },
    { src: 'photo2.jpg', alt: 'Photo 2' },
    { src: 'photo3.jpg', alt: 'Photo 3' }
  ];

  addPhoto() {
    // Ici, vous pouvez ajouter la logique pour permettre à l'utilisateur d'ajouter une photo,
    // par exemple, en affichant un formulaire de téléchargement d'image ou en ouvrant une boîte de dialogue pour sélectionner une image.
    // Une fois que vous avez l'URL de la nouvelle photo, vous pouvez l'ajouter au tableau photos.
  }
}
