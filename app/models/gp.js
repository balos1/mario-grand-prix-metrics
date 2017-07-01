import DS from 'ember-data';

/**
 * Represents a grand prix, which is a set of courses completed,
 * with the winners of each course, the placement of racers in
 * grand prix as a whole, etc.
 * @module gp
 * @type DS.Model
 */
export default DS.Model.extend({
  timestamp: DS.attr('date'),
  players: DS.hasMany('player'),
  completedCourses: DS.hasMany('completed-course'),
  standings: DS.attr()
});
