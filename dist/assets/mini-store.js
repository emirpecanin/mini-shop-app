'use strict';



;define("mini-store/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("mini-store/app", ["exports", "ember-resolver", "ember-load-initializers", "mini-store/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("mini-store/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("mini-store/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
;define("mini-store/components/header/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <header >
    <h2>MINIshop Project</h2>  
    <Header::Navigation @items={{this.itemsInCart}}/>
  </header>
  
  */
  {
    "id": "g79HmZc0",
    "block": "{\"symbols\":[],\"statements\":[[10,\"header\"],[12],[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"MINIshop Project\"],[13],[2,\"  \\n  \"],[8,\"header/navigation\",[],[[\"@items\"],[[32,0,[\"itemsInCart\"]]]],null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "mini-store/components/header/index.hbs"
    }
  });

  let HeaderComponent = (_dec = Ember.inject.service('shopping-cart'), _dec2 = Ember._tracked, _dec3 = Ember._action, (_class = (_temp = class HeaderComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cart", _descriptor, this);

      _initializerDefineProperty(this, "itemsInCart", _descriptor2, this);
    }

    increment() {
      this.itemsInCart += 1;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "itemsInCart", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "increment", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "increment"), _class.prototype)), _class));
  _exports.default = HeaderComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, HeaderComponent);
});
;define("mini-store/components/header/navigation", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="navigation">
      <ul>
        <li>
          <LinkTo 
            @route="index" 
           >
            Store 
          </LinkTo>
        </li>
      </ul>
      <LinkTo 
        @route="cart"
        class="cart">
        <FaIcon @icon="shopping-cart" @prefix="fas" class="cart-icon"/>
        {{#if @items}}
          <span class="cart-items" >{{@items}}</span>
        {{/if}}
  
  
      </LinkTo>
  </div>
  */
  {
    "id": "XAmtF/xm",
    "block": "{\"symbols\":[\"@items\"],\"statements\":[[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n    \"],[10,\"ul\"],[12],[2,\"\\n      \"],[10,\"li\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          Store \\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[8,\"link-to\",[[24,0,\"cart\"]],[[\"@route\"],[\"cart\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,\"fa-icon\",[[24,0,\"cart-icon\"]],[[\"@icon\",\"@prefix\"],[\"shopping-cart\",\"fas\"]],null],[2,\"\\n\"],[6,[37,0],[[32,1]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"span\"],[14,0,\"cart-items\"],[12],[1,[32,1]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"if\"]}",
    "meta": {
      "moduleName": "mini-store/components/header/navigation.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("mini-store/components/new-product/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <form class="add-new-item" {{on 'submit' this.addNewProduct}}>
    <Input 
      @value={{this.name}}
      type="text" 
      name="name" 
      required="required" 
      placeholder="Product name"/>
    <Input 
      @value={{this.price}}
      type="number" 
      name="price" 
      required="required" 
      placeholder="Price"/>
    <button type="submit">Add</button>
  </form>
  */
  {
    "id": "ZDcBJshQ",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[24,0,\"add-new-item\"],[4,[38,0],[\"submit\",[32,0,[\"addNewProduct\"]]],null],[12],[2,\"\\n  \"],[8,\"input\",[[24,3,\"name\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Product name\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"name\"]]]],null],[2,\"\\n  \"],[8,\"input\",[[24,3,\"price\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Price\"],[24,4,\"number\"]],[[\"@value\"],[[32,0,[\"price\"]]]],null],[2,\"\\n  \"],[10,\"button\"],[14,4,\"submit\"],[12],[2,\"Add\"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"on\"]}",
    "meta": {
      "moduleName": "mini-store/components/new-product/index.hbs"
    }
  });

  let NewProductComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._action, (_class = (_temp = class NewProductComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "price", _descriptor2, this);
    }

    addNewProduct(event) {
      event.preventDefault();

      if (this.name && this.price) {
        let formatedName = this.name.split('').map((char, index) => {
          return index === 0 ? char.toUpperCase() : char;
        }).join('');
        this.args.addItem({
          name: formatedName,
          price: this.price
        });
      }

      event.target.name.value = "";
      event.target.name.focus();
      event.target.price.value = "";
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "price", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addNewProduct", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "addNewProduct"), _class.prototype)), _class));
  _exports.default = NewProductComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NewProductComponent);
});
;define("mini-store/components/product/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="product">
    <span class="name">
      {{@product.name}}
    </span>
    
    
    
    <span class="price">
      ${{@product.price}}
    </span>
    
    {{#if @product.amount}}
      <span class="amount"> x {{@product.amount}}  </span>
    {{/if}}
  
    {{yield}}
    {{#if @storePage}}
      <button 
        type="button" 
        class="add-to-cart"
        {{on 'click' this.addItem}}  
      >Add to cart</button>
      {{else}}
      <span class="total">${{this.total}}</span>
    {{/if}}
  </div>
  */
  {
    "id": "43Ks27M8",
    "block": "{\"symbols\":[\"@product\",\"&default\",\"@storePage\"],\"statements\":[[10,\"div\"],[14,0,\"product\"],[12],[2,\"\\n  \"],[10,\"span\"],[14,0,\"name\"],[12],[2,\"\\n    \"],[1,[32,1,[\"name\"]]],[2,\"\\n  \"],[13],[2,\"\\n  \\n  \\n  \\n  \"],[10,\"span\"],[14,0,\"price\"],[12],[2,\"\\n    $\"],[1,[32,1,[\"price\"]]],[2,\"\\n  \"],[13],[2,\"\\n  \\n\"],[6,[37,1],[[32,1,[\"amount\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"span\"],[14,0,\"amount\"],[12],[2,\" x \"],[1,[32,1,[\"amount\"]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[18,2,null],[2,\"\\n\"],[6,[37,1],[[32,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[11,\"button\"],[24,0,\"add-to-cart\"],[24,4,\"button\"],[4,[38,0],[\"click\",[32,0,[\"addItem\"]]],null],[12],[2,\"Add to cart\"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"span\"],[14,0,\"total\"],[12],[2,\"$\"],[1,[32,0,[\"total\"]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"on\",\"if\"]}",
    "meta": {
      "moduleName": "mini-store/components/product/index.hbs"
    }
  });

  let ProductComponent = (_dec = Ember.inject.service('shopping-cart'), _dec2 = Ember._action, (_class = (_temp = class ProductComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "shoppingCart", _descriptor, this);
    }

    get total() {
      return this.args.product.price * this.args.product.amount;
    }

    addItem() {
      this.shoppingCart.addToCart(this.args.product);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "shoppingCart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addItem", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "addItem"), _class.prototype)), _class));
  _exports.default = ProductComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProductComponent);
});
;define("mini-store/components/products/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <NewProduct 
    @addItem={{this.addItem}}
  />
  
  {{#each this.products as |product|}} 
      <Product 
        @storePage={{true}}
        @product={{product}}
      />
    {{else}}
      <div>No Products available</div>
  {{/each}}
  
  */
  {
    "id": "aUeWQgEm",
    "block": "{\"symbols\":[\"product\"],\"statements\":[[8,\"new-product\",[],[[\"@addItem\"],[[32,0,[\"addItem\"]]]],null],[2,\"\\n\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"products\"]]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[8,\"product\",[],[[\"@storePage\",\"@product\"],[true,[32,1]]],null],[2,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[2,\"    \"],[10,\"div\"],[12],[2,\"No Products available\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "mini-store/components/products/index.hbs"
    }
  });

  let ProductsComponent = (_dec = Ember.inject.service('storehouse'), _dec2 = Ember.inject.service('shopping-cart'), _dec3 = Ember._action, (_class = (_temp = class ProductsComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "storehouse", _descriptor, this);

      _initializerDefineProperty(this, "shoppingCart", _descriptor2, this);
    }

    get products() {
      return this.storehouse.getItems();
    }

    addItem(item) {
      this.storehouse.add(item);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "storehouse", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "shoppingCart", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addItem", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "addItem"), _class.prototype)), _class));
  _exports.default = ProductsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProductsComponent);
});
;define("mini-store/components/shopping-cart/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h3 class="cart-title">Products in cart:</h3>
  {{#each this.products as |product|}}
    <Product 
      @storePage={{false}}
      @product={{product}}
    />
  {{/each}}
  
  <span class="grand-total">Total: {{this.grandtotal}}</span>
  */
  {
    "id": "xQoy0Nu/",
    "block": "{\"symbols\":[\"product\"],\"statements\":[[10,\"h3\"],[14,0,\"cart-title\"],[12],[2,\"Products in cart:\"],[13],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"products\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[8,\"product\",[],[[\"@storePage\",\"@product\"],[false,[32,1]]],null],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"\\n\"],[10,\"span\"],[14,0,\"grand-total\"],[12],[2,\"Total: \"],[1,[32,0,[\"grandtotal\"]]],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "mini-store/components/shopping-cart/index.hbs"
    }
  });

  let ShoppingCartComponent = (_dec = Ember.inject.service('shopping-cart'), (_class = (_temp = class ShoppingCartComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "shoppingCart", _descriptor, this);
    }

    get products() {
      return this.shoppingCart.showCart();
    }

    get grandtotal() {
      return this.shoppingCart.getGrandTotal();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "shoppingCart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ShoppingCartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ShoppingCartComponent);
});
;define("mini-store/components/user-information-input/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#if this.grandTotal}}
  <div class="user-input">
    <form class="user-form" {{on 'submit' this.order}}>
      <div class="form-row">
        <label for="name">Name</label>
        <Input @value={{this.name}} required="required"/>
      </div>
      <div class="form-row">
        <label for="email">Email:</label>
        <Input @value={{this.email}} type="email" required="required"/>
      </div>
      <div class="form-row">
        <label for="adress">Adress</label>
        <Input @value={{this.adress}} required="required"/>
      </div>
      <div class="form-row">
        <label for="city">City/State</label>
        <Input @value={{this.city}} required="required"/>
      </div>
      <button type="submit">Order</button>
    </form>
    <div class="user-info">
      <h3>
        Information:
      </h3>
      <div class="user-name">
          <span class="user-info-label">Name</span> 
            {{this.name}}
      </div>
      <div class="user-email">
          <span class="user-info-label">Email</span> 
            {{this.email}}
      </div>
      <div class="user-adress">
          <span class="user-info-label">Adress</span> 
            {{this.adress}}
      </div>
      <div class="user-city">
          <span class="user-info-label">City</span> 
            {{this.city}}
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor perspiciatis iusto ipsa neque aspernatur deleniti obcaecati sunt ab! Sed, minus!</p>
    </div>
  </div>
  {{/if}}
  
  
  */
  {
    "id": "xob9orhR",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,1],[[32,0,[\"grandTotal\"]]],null,[[\"default\"],[{\"statements\":[[10,\"div\"],[14,0,\"user-input\"],[12],[2,\"\\n  \"],[11,\"form\"],[24,0,\"user-form\"],[4,[38,0],[\"submit\",[32,0,[\"order\"]]],null],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"form-row\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,\"for\",\"name\"],[12],[2,\"Name\"],[13],[2,\"\\n      \"],[8,\"input\",[[24,\"required\",\"required\"]],[[\"@value\"],[[32,0,[\"name\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"form-row\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,\"for\",\"email\"],[12],[2,\"Email:\"],[13],[2,\"\\n      \"],[8,\"input\",[[24,\"required\",\"required\"],[24,4,\"email\"]],[[\"@value\"],[[32,0,[\"email\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"form-row\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,\"for\",\"adress\"],[12],[2,\"Adress\"],[13],[2,\"\\n      \"],[8,\"input\",[[24,\"required\",\"required\"]],[[\"@value\"],[[32,0,[\"adress\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"form-row\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,\"for\",\"city\"],[12],[2,\"City/State\"],[13],[2,\"\\n      \"],[8,\"input\",[[24,\"required\",\"required\"]],[[\"@value\"],[[32,0,[\"city\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"button\"],[14,4,\"submit\"],[12],[2,\"Order\"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"user-info\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"\\n      Information:\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"user-name\"],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"user-info-label\"],[12],[2,\"Name\"],[13],[2,\" \\n          \"],[1,[32,0,[\"name\"]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"user-email\"],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"user-info-label\"],[12],[2,\"Email\"],[13],[2,\" \\n          \"],[1,[32,0,[\"email\"]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"user-adress\"],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"user-info-label\"],[12],[2,\"Adress\"],[13],[2,\" \\n          \"],[1,[32,0,[\"adress\"]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"user-city\"],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"user-info-label\"],[12],[2,\"City\"],[13],[2,\" \\n          \"],[1,[32,0,[\"city\"]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor perspiciatis iusto ipsa neque aspernatur deleniti obcaecati sunt ab! Sed, minus!\"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"on\",\"if\"]}",
    "meta": {
      "moduleName": "mini-store/components/user-information-input/index.hbs"
    }
  });

  let UserInformationInputComponent = (_dec = Ember.inject.service('shopping-cart'), _dec2 = Ember.inject.service, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._action, (_class = (_temp = class UserInformationInputComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cart", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);

      _initializerDefineProperty(this, "name", _descriptor3, this);

      _initializerDefineProperty(this, "email", _descriptor4, this);

      _initializerDefineProperty(this, "adress", _descriptor5, this);

      _initializerDefineProperty(this, "city", _descriptor6, this);
    }

    order(event) {
      event.preventDefault();
      this.cart.order({
        name: this.name,
        email: this.email,
        adress: this.adress,
        city: this.city
      });
      this.cart.empty();
      this.router.transitionTo('index');
    }

    get grandTotal() {
      return this.cart.getGrandTotal();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "adress", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "city", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "order", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "order"), _class.prototype)), _class));
  _exports.default = UserInformationInputComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, UserInformationInputComponent);
});
;define("mini-store/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("mini-store/helpers/app-version", ["exports", "mini-store/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("mini-store/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("mini-store/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("mini-store/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "mini-store/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("mini-store/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("mini-store/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("mini-store/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("mini-store/initializers/export-application-global", ["exports", "mini-store/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("mini-store/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("mini-store/router", ["exports", "mini-store/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('cart');
  });
});
;define("mini-store/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("mini-store/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("mini-store/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("mini-store/services/shopping-cart", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ShoppingCartService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "cart", Ember.A([]));

      _defineProperty(this, "userInfo", {});

      _defineProperty(this, "cartContents", Ember.A([]));
    }

    itemsInCart() {
      console.log(this.cart.length);
      return this.cart.length;
    }

    addToCart(item) {
      this.cart.pushObject(item);
    }

    showCart() {
      function reducer(result, item) {
        let existingItem = result.find(i => i.name === item.name);

        if (existingItem) {
          existingItem.amount += 1;
        } else {
          result.push({ ...item,
            amount: 1
          });
        }

        return result;
      }

      let sortedCart = this.cart.reduce(reducer, []);
      return sortedCart;
    }

    getGrandTotal() {
      function reducer(total, item) {
        return total + item.price * item.amount;
      }

      ;
      let sortedCart = this.showCart();
      let total = sortedCart.reduce(reducer, 0);
      return total;
    }

    order(info) {
      this.userInfo = info;
      this.cartContents.push(...this.showCart());
      console.log('User info >', this.userInfo);
      console.log('Cart contents >', this.cartContents);
    }

    empty() {
      this.cart.clear();
    }

  }

  _exports.default = ShoppingCartService;
});
;define("mini-store/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("mini-store/services/storehouse", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class StorehouseService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "products", Ember.A([]));
    }

    add(product) {
      this.products.pushObject(product);
    }

    getItems() {
      return this.products;
    }

  }

  _exports.default = StorehouseService;
});
;define("mini-store/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ji17/DLs",
    "block": "{\"symbols\":[],\"statements\":[[8,\"header\",[],[[],[]],null],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "mini-store/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("mini-store/templates/cart", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HKzLGwC5",
    "block": "{\"symbols\":[],\"statements\":[[8,\"shopping-cart\",[],[[],[]],null],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[8,\"user-information-input\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "mini-store/templates/cart.hbs"
    }
  });

  _exports.default = _default;
});
;define("mini-store/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YTMnjz4/",
    "block": "{\"symbols\":[],\"statements\":[[8,\"products\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "mini-store/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("mini-store/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("mini-store/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("mini-store/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("mini-store/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('mini-store/config/environment', [], function() {
  var prefix = 'mini-store';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("mini-store/app")["default"].create({"name":"mini-store","version":"0.0.0+47291e3d"});
          }
        
//# sourceMappingURL=mini-store.map
