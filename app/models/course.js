import DS from 'ember-data';

/**
 * Represents a course in a grand prix cup. Should be read only.
 * @module course
 * @type DS.Model
 */
export default DS.Model.extend({
  title: DS.attr('string'),
  photoURL: DS.attr('string'),
  cup: DS.belongsTo('gp-cup')
});
