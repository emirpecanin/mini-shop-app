import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewProductComponent extends Component {
  @tracked name;
  @tracked price; 
  
  @action
  addNewProduct(event){
    event.preventDefault();

    if (this.name && this.price){
      let formatedName = this.name
      .split('')
      .map((char, index) => {
        return index === 0 ? char.toUpperCase() : char;
      })
      .join('');
      this.args.addItem({
        name: formatedName,
        price: this.price 
      })
    }
    event.target.name.value ="";
    event.target.name.focus();
    event.target.price.value ="";
  }
}