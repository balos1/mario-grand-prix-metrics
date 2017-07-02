import { moduleForModel, test } from 'ember-qunit';

moduleForModel('completed-course', 'Unit | Model | completed course', {
  // Specify the other units that are required for this test.
  needs: ['model:player']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
