import Ember from 'ember';

const {
    get,
    Route
} = Ember;

export default Route.extend({
  beforeModel() {
    return get(this, 'session').fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
     get(this, 'session').open('firebase', { provider: provider}).then((data) => {
        console.log(data.currentUser);
        let newTest = get(this, 'store').createRecord('test', {winner: data.currentUser.uid});
        newTest.save();
      });
    },
    signOut: function() {
     get(this, 'session').close();
    }
  }
});