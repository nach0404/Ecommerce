const categoriesService = require("../../services/categoriesService");


// get /api/categories
function getAll(req, res) {

    try {

        const categories = categoriesService.getAllCategories();

        return res.status(200).json(categories);


    } catch (error) {

        return res.status(500).json({
            error: "Error interno del servidor"
        });

    }

}



// get /api/categories/:id
function getById(req, res) {

    try {

        const category = categoriesService.getCategoryById(req.params.id);


        if (!category) {

            return res.status(404).json({
                error: "Categoría no encontrada"
            });

        }


        return res.status(200).json(category);


    } catch (error) {

        return res.status(500).json({
            error: "Error interno del servidor"
        });

    }

}



// post /api/categories
function create(req, res) {

    try {

        const { name } = req.body;


        if (!name) {

            return res.status(400).json({
                error: "El nombre de la categoría es obligatorio"
            });

        }


        const newCategory = categoriesService.createCategory(name);


        return res.status(201).json(newCategory);



    } catch (error) {


        return res.status(500).json({
            error: "Error interno del servidor"
        });


    }

}



// put /api/categories/:id
function update(req, res) {

    try {

        const { name } = req.body;


        const category = categoriesService.getCategoryById(req.params.id);


        if (!category) {

            return res.status(404).json({
                error: "Categoría no encontrada"
            });

        }


        if (!name) {

            return res.status(400).json({
                error: "El nombre de la categoría es obligatorio"
            });

        }


        const updatedCategory =
            categoriesService.updateCategory(
                req.params.id,
                name
            );


        return res.status(200).json(updatedCategory);



    } catch (error) {

        return res.status(500).json({
            error: "Error interno del servidor"
        });

    }

}



// deltele /api/categories/:id
function remove(req, res) {

    try {

        const category =
            categoriesService.getCategoryById(req.params.id);



        if (!category) {

            return res.status(404).json({
                error: "Categoría no encontrada"
            });

        }



        categoriesService.deleteCategory(req.params.id);



        return res.status(200).json({
            message: "Categoría eliminada correctamente"
        });



    } catch (error) {

        return res.status(500).json({
            error: "Error interno del servidor"
        });

    }

}



module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};