var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
  name: String, //Alliance of Baptists

  website: String, //www.allianceofbaptists.org
  phone: String, //+1 (866) 745-7609
  email: String, //
  addressLine1: String, //3939 LaVista Road
  addressLine2: String, //Suite E-122
  city: String, //Atlanta
  state: String, //GA
  zip: String, //30084

  facebookPage: String, //https://19www.facebook.com/AllianceBaptists

  contact: {
    name: String, //Leah Grundset Davis
    title: String, //Communications Specialist
    phone: String, //+1 (866) 745-7609
    email: String, //leah@allianceofbaptists.org
  },

  religion: String, //Christianity
  classification: String, //Protestant
  questions: [{
    questionId: String,
    answer: String,
  }],

  region: String, //United States
  originYear: Number, //1987
  originCity: String, //Charolette
  originState: String, //NC
  congregations: Number, //130
  members: Number, //65,000

  isActive: Boolean,

  createdOn: Date,
  modifiedOn: Date,
});

module.exports = restful.model('Denomination', schema);
