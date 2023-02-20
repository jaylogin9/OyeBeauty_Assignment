const mongoose = require('mongoose');

/* Schema */
let movieSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  movieType: { type: String, required: true },
  movieRating: { type: Number, required: true },
})

module.exports = mongoose.model('Movie', movieSchema)