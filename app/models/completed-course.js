import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  players: DS.hasMany('player'),
  results: DS.hasMany('player')
});
