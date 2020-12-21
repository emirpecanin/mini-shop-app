import Service from '@ember/service';
import { A } from '@ember/array';

export default class ShoppingCartService extends Service {
  cart = A([]);
  userInfo = {};
  cartContents = A([]);

  itemsInCart(){
    console.log(this.cart.length);
    return this.cart.length;
  }
  
  addToCart(item){
      this.cart.pushObject(item);
  }
  
  showCart(){

    function reducer (result, item){
      let existingItem = result.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        result.push({
          ...item,
          amount: 1
        })
      }
      return result;
    }

    let sortedCart = this.cart.reduce(reducer,[]);
    return sortedCart;
  }

  getGrandTotal(){
    function reducer(total, item){
      return total + item.price * item.amount;
    };

    let sortedCart = this.showCart();
    let total = sortedCart.reduce(reducer,0);
    return total;
  }

  order(info){
    this.userInfo = info;
    this.cartContents.push(...this.showCart());
    console.log('User info >', this.userInfo);
    console.log('Cart contents >', this.cartContents);
  }

  empty(){
    this.cart.clear();
  }

}
