import DS from 'ember-data';

const {
  attr,
  belongsTo,
  Model
} = DS;

/**
 * Represents a course in a grand prix cup. Should be read only.
 * @module course
 * @type DS.Model
 */
export default Model.extend({
  title: attr('string'),
  photoURL: attr('string'),
  cup: belongsTo('gp-cup')
});
