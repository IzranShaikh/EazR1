const router = require('express').Router();
const viewRoutes = require('./views.route');
const assert = require('assert');

assert(viewRoutes, "View Routes are required!");

router.use('/view', viewRoutes);
router.use('*', (req, res) => { //other non-existing routes
    res.status(404).json({ "message": "Page Not Found" });
});

module.exports = router;