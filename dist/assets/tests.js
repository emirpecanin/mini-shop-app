'use strict';

define("mini-store/tests/integration/modifiers/increment-shop-number-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | increment-shop-number', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <div {{increment-shop-number}}></div>
      */
      {
        "id": "64lxpfzM",
        "block": "{\"symbols\":[],\"statements\":[[11,\"div\"],[4,[38,0],null,null],[12],[13]],\"hasEval\":false,\"upvars\":[\"increment-shop-number\"]}",
        "meta": {}
      }));
      assert.ok(true);
    });
  });
});
define("mini-store/tests/test-helper", ["mini-store/app", "mini-store/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("mini-store/tests/unit/services/shopping-cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | shopping-cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:shopping-cart');
      assert.ok(service);
    });
  });
});
define("mini-store/tests/unit/services/storehouse-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | storehouse', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:storehouse');
      assert.ok(service);
    });
  });
});
define('mini-store/config/environment', [], function() {
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

require('mini-store/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
