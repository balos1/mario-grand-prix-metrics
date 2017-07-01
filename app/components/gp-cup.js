import Ember from 'ember';

const {
  Component,
  computed,
  copy,
  get,
  set
} = Ember;

export default Component.extend({
  cup: null,

  completedCourses: computed.alias('cup.completedCourses'),

  showBackOfCard: false,

  actions: {
    flipCard() {
      this.toggleProperty('showBackOfCard');
    },

    chooseCourse(cup, course) {
      get(this, 'chooseCourse')(cup, course);
    }
  }
});
