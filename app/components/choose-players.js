import Ember from 'ember';

const {
  Component,
  inject: { service },
  get
} = Ember;

export default Component.extend({
  store: service(),

  /**
   * @protected
   */
  selectedPlayers: [],

  actions: {
    /**
     * @public
     */
    confirmAllPlayers(selectedPlayers) {
      get(this, 'onAllPlayersSelected')(selectedPlayers);
    },

    /**
     * @protected
     */
    selectPlayer() {
      let playerObj = {
        firstName: 'Cody',
        lastName: 'Balos',
        photoURL: ''
      };
      let playerModel = get(this, 'store').createRecord('player', playerObj);
      get(this, 'selectedPlayers').pushObject(playerModel);
    }
  }
});
