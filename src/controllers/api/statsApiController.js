const statsService = require("../../services/statsService");



function getStats(req, res) {

    try {

        const stats = statsService.getStats();


        return res.status(200).json(stats);


    } catch (error) {

        return res.status(500).json({
            error: "Error interno del servidor"
        });

    }

}



module.exports = {
    getStats
};