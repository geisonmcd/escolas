const database = require('infra/database');

const saveInstitution = function (institution){
    database.none(`insert into institution (name) values ($1)`, [institution.name])
};

const updateInstitution = function (idInstitution, institution) {
    database.none(`update institution set name = $2 where id_institution = $1`, [idInstitution, institution.name]);
};

const getInstitutions = function () {
    return database.query(`select * from institution`);    
};

const deleteInstitution = async function (idInstitution) {
    const review = await database.oneOrNone(`select * from review where id_institution = $1`, [idInstitution]);
    if (review) await database.none('delete from review where id_review = $1', [review.idReview]);
    database.none(`delete from institution where id_institution = $1`, [idInstitution]);
};

module.exports = {
    saveInstitution,
    updateInstitution,
    getInstitutions,
    deleteInstitution,
};