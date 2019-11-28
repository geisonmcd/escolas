const express = require('express');
const router = express.Router({ mergeParams: true });
const institutionsService = require('services/institutionsService');

router.post('/', async function (req, res) {
    const institution = req.body;
    institutionsService.saveInstitution(institution);
    res.end();
});

router.get('/', async function (req, res) {
    const institutions = await institutionsService.getInstitutions();
    res.json(institutions);
});

module.exports = router;