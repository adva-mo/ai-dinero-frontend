import { module, test } from 'qunit';
import { setupTest } from 'ai-dinero-frontend/tests/helpers';

module('Unit | Route | expenses', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:expenses');
    assert.ok(route);
  });
});
