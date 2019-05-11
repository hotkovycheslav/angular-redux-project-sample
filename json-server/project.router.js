const service = require('./service');
const router = require('express').Router();

router.get('/', (req, res) => {
    let result = service.getProjects();
    res.status(200).json(result);
});
module.exports = router;