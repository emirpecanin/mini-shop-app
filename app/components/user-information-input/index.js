import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserInformationInputComponent extends Component {
 @service('shopping-cart') cart;
 @service router;

  @tracked name;
  @tracked email;
  @tracked adress;
  @tracked city;

  @action 
  order(event){
    event.preventDefault();
    this.cart.order({
      name: this.name,
      email: this.email,
      adress: this.adress,
      city: this.city
    })
    this.cart.empty();
    this.router.transitionTo('index');
  }

 get grandTotal(){
   return this.cart.getGrandTotal();
 }
}