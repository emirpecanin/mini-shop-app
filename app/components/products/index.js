import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';


export default class ProductsComponent extends Component {
  @service('storehouse') storehouse;
  @service('shopping-cart') shoppingCart;

  get products(){
    return this.storehouse.getItems();
  }
  
  @action
  addItem(item){
    this.storehouse.add(item)
  }
}
