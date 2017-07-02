import Ember from 'ember';

const {
  Controller,
  get,
  set
} = Ember;


export default Controller.extend({
  isPlayersChosen: false,

  actions: {
    /**
     * Reacts to all players being chosen, and does work to proceed to next step in creating a new grand-prix.
     * @event onAllPlayersSelected
     */
    onAllPlayersSelected(selectedPlayers) {
      set(this, 'model.players', selectedPlayers);
      get(this, 'model').save()
        .then(() => {
          set(this, 'isPlayersChosen', true);
          this.transitionToRoute('start-gp.choose-course');
        })
        .catch((err) => {
          debugger;
          console.log(err);
        });
    }
  }
});
