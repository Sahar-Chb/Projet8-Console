const mongoose = require('mongoose');

const Console = mongoose.model('Console', {
  
  name: {
    type: String
  },

  age: {
    type:Number
  },

  description: {
    type: String
  },

  image: {
    type: String
  }
})

module.exports = Console;