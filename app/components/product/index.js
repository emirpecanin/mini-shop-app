import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class ProductComponent extends Component{
  @service('shopping-cart') shoppingCart;
  
  get total(){
    return this.args.product.price * this.args.product.amount;
  }

  @action
  addItem(){
    this.shoppingCart.addToCart(this.args.product);
    
  }
}