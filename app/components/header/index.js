import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @service('shopping-cart') cart;
  @tracked itemsInCart = 0;

  @action
  increment(){
    this.itemsInCart += 1;
  }
} 