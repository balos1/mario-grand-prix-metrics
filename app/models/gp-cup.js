import DS from 'ember-data';

/**
 * Represents a Grand Prix Cup. Should be read only.
 * @module gp-cup
 * @type DS.Model
 */
export default DS.Model.extend({
  title: DS.attr('string'),
  game: DS.attr('string'),
  photoURL: DS.attr('string'),
  courses: DS.hasMany('course')
});
