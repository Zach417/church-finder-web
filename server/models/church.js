var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
  name: String, //University Heights Baptist Church

  website: String, //http://www.uhbc.org/
  phone: String, //+1 (417) 862-0789
  email: String, //uhbc@uhbc.org
  facebookPage: String, //https://www.facebook.com/trey.hathcock

  addressLine1: String, //1010 S National Ave.
  addressLine2: String, //
  city: String, //Springfield
  state: String, //MO
  zip: String, //65804

  contact: {
    name: String, //
    title: String, //
    phone: String, //
    email: String, //
  },

  religion: String, //Christianity
  classification: String, //Protestant
  originYear: Number, //
  members: Number, //

  denomination: {
    type: mongoose.Schema.ObjectId,
    ref: 'Denomination',
    unique: false,
    dropDups: false,
  },
  questions: [{
    questionId: String,
    answer: String,
  }],

  isActive: Boolean,

  createdOn: Date,
  modifiedOn: Date,
});

module.exports = restful.model('Church', schema);
