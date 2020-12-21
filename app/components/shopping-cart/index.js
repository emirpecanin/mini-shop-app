import Component from '@glimmer/component';
import {inject as service} from '@ember/service';

export default class ShoppingCartComponent extends Component{
  @service('shopping-cart') shoppingCart;
    

  get products(){
    return this.shoppingCart.showCart();
  }
  get grandtotal(){
    
    return this.shoppingCart.getGrandTotal();
  }
}