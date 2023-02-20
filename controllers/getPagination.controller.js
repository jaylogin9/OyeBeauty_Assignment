const Movie =require('../models/movieModel.js');

const getPagination = async (req, res) => {
    try {
      const { page=1, limit=2} = req.query; //By Default use page=1 and limit=2 means only 2 data will be shown in the page 1.
      const newUser = await Movie.find().limit(limit*1).skip((page-1)*limit);
       res.status(201).json({total:newUser.length,newUser});
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  };

module.exports = getPagination;