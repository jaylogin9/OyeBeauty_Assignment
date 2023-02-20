const express = require ('express');
const router = express.Router();

const create = require ('../controllers/create.controller.js');
const getAll = require ('../controllers/getAll.controller.js');
const getSingle = require ('../controllers/getSingle.controller.js');
const getPagination = require ('../controllers/getPagination.controller.js');

/* Routing the page */
router.post("/add-movie",create);
router.get("/get-all",getAll);
router.get("/get-single", getSingle);
router.get("/get-paginated", getPagination);

module.exports= router;