import Ember from 'ember';

const {
  Controller,
  get,
  set
} = Ember;


export default Controller.extend({
  actions: {
    chooseCourse(cup, course) {
      let completedCourses = get(cup, 'completedCourses');
      let count = get(course, 'count') || 0;
      set(course, 'count', ++count);
      if (!completedCourses.any((x) => x.id === course.id)) {
        get(cup, 'completedCourses').pushObject(course);
      }
    }
  }
});
