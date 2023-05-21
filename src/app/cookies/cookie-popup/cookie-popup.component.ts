import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.css']
})
export class CookiePopupComponent {
  cookiesAccepted = false;

  acceptCookies() {
    // Ici, vous pouvez ajouter la logique pour enregistrer l'acceptation des cookies, par exemple, en utilisant des cookies ou le stockage local (localStorage).
    // Vous pouvez également masquer la fenêtre contextuelle à l'aide d'une variable de contrôle.
    this.cookiesAccepted = true;
  }

  disablePopup() {
    this.cookiesAccepted = true;
  }
}
