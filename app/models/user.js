import DS from 'ember-data';

export default DS.Model.extend({
  points: DS.attr("number"),
  trust_level: DS.attr("string"),

  imageUrl: DS.attr("string"),
  createdAt: DS.attr('date'),

  proposals: DS.hasMany('proposals', {
    async: false
  }),
  badges: DS.attr(),

  // Only for registration purposes
  emailOptIn: DS.attr("boolean"),
  acceptTos: DS.attr("boolean"),
  password: DS.attr("string"),
  email: DS.attr("string"),
  username: DS.attr("string"), // This is only used for registration because Ember doesn't want to send IDs

});
