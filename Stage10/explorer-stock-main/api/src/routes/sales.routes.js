const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const checkAuthorization = require("../middlewares/checkAuthorization");



const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
salesRoutes.use(checkAuthorization(["admin"]));

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;