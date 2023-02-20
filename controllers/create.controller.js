const Movie =require('../models/movieModel.js');

const create = async (req, res) => {
    try {
      const { movieName, movieType, movieRating} = req.body;

      const newUser = await Movie.create({ movieName, movieType, movieRating});
      await newUser.save();
       res.status(201).json(newUser);
       console.log(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  };

module.exports = create;