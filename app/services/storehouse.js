import Service from '@ember/service';
import { A } from '@ember/array';

export default class StorehouseService extends Service {
  products = A([]);

  add(product) {
    this.products.pushObject(product);
  }

  getItems(){
    return this.products;
  }
}

