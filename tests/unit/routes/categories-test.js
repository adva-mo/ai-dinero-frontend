import { module, test } from 'qunit';
import { setupTest } from 'ai-dinero-frontend/tests/helpers';

module('Unit | Route | categories', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:categories');
    assert.ok(route);
  });
});
