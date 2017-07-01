import { moduleForModel, test } from 'ember-qunit';

moduleForModel('gp-cup', 'Unit | Model | gp-cup', {
  // Specify the other units that are required for this test.
  needs: ['model:course']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
