import Ember from 'ember';

const {
  Component,
  computed,
  get,
  set
} = Ember;

export default Component.extend({
  completedCourseIds: [1, 2],

  completedCourses: computed('completedCourseIds.[]', function() {
    let completedCourses = [];
    let courses = get(this, 'cup.courses') || [];
    get(this, 'completedCourseIds').forEach((id) => {
      completedCourses.pushObject(courses.find((x) => x.id === id));
    });
    return completedCourses.map((course) => {
      let n = 0;
      completedCourses.forEach((course2) => {
        return get(course, 'id') === get(course2, 'id') ? n++ : n;
      });
      set(course, 'count', n);
      return course;
    });
  }),

  showBackOfCard: false,

  actions: {
    flipCard() {
      this.toggleProperty('showBackOfCard');
    },

    chooseCourse(courseId) {
      get(this, 'completedCourseIds').pushObject(courseId);
    }
  }
});
