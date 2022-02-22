import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Le produit est bien partagé!');
  }

  onNotify() {
    window.alert('Vous serez notifié quand le produit sera disponible');
  }
}
