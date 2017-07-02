import DS from 'ember-data';

/**
 * Represents a grand prix, which is a set of courses completed,
 * with the winners of each course, the placement of racers in
 * grand prix as a whole, etc.
 * @module gp
 * @type DS.Model
 */
export default DS.Model.extend({
  startDate: DS.attr('', { defaultValue: new Date() }),
  inProgress: DS.attr('boolean', { defaultValue: true }),
  players: DS.hasMany('player'),
  completedCourses: DS.hasMany('completed-course'),
  standings: DS.attr('', { defaultValue: [] })
});
