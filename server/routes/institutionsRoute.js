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
    console.log(idInstitution, institution);
    await institutionsService.updateInstitution(idInstitution, institution);
    res.end();
});

router.get('/:idInstitution/users/:idUser/review', async function (req, res) {
    const idInstitution = req.params.idInstitution;
    const idUser = req.params.idUser;
    const institution = await institutionsService.getInstitutionWithUserReview(idInstitution, idUser);
    res.json(institution);
});

router.post('/:idInstitution/users/:idUser/review', async function (req, res) {
    const idUser = req.params.idUser;
    const idInstitution = req.params.idInstitution;
    const review = req.body;
    await institutionsService.saveReview(idInstitution, idUser, review);
    res.end();
});

router.put('/:idInstitution/users/:idUser/review/:idReview', async function (req, res) {
    const idReview = req.params.idReview;
    const review = req.body;
    await institutionsService.updateReview(idReview, review);
    res.end();
});

module.exports = router;