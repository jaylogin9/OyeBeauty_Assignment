const Movie =require('../models/movieModel.js');

const getSingle = async (req, res) => {
    try {
      const { id} = req.query;
      
      const newUser = await Movie.findById(id);
       res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  };

module.exports = getSingle;