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

router.delete("/:idInstitution", async function (req, res) {
    const idInstitution = req.params.idInstitution;
    await institutionsService.deleteInstitution(idInstitution);
    res.end();
});

router.put('/:idInstitution', async function (req, res) {
    const idInstitution = req.params.idInstitution;
    const institution = req.body;
    await institutionsService.updateInstitution(idInstitution, institution);
    res.end();
});

module.exports = router;