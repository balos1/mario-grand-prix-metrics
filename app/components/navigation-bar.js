import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  showSideNav: false,

  actions: {
    signOut() {
      get(this, 'signOut')();
    },

    toggleSideNav() {
      this.toggleProperty('showSideNav');
    }
  }
});
