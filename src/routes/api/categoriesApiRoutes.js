const express = require("express");

const router = express.Router();

const categoriesController = require("../../controllers/api/categoriesApiController");

// obtener todas las categorías
router.get(
    "/",
    categoriesController.getAll
);


// obtener categoría por ID
router.get(
    "/:id",
    categoriesController.getById
);


// crear categoría
router.post(
    "/",
    categoriesController.create
);


// modificar categoría
router.put(
    "/:id",
    categoriesController.update
);


// eliminar categoría
router.delete(
    "/:id",
    categoriesController.remove
);



module.exports = router;