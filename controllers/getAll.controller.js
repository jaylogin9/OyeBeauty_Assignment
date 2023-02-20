const Movie = require ("../models/movieModel.js");

const getAll = async (req, res) => {
  try {
    const newUser = await Movie.find();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = getAll;
