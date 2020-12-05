const mongoose = require('mongoose');  
const TicketSchema = new mongoose.Schema({  
  // number: Number,
  // name: String,
  // description: String,
  // priority: String,
  // date: Date,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
    division: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
mongoose.model('tickets', TicketSchema);

module.exports = mongoose.model('tickets');