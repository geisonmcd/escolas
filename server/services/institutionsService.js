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

const deleteInstitution = function (idInstitution) {
    database.none(`delete from institution where id_institution = $1`, [idInstitution]);
};

module.exports = {
    saveInstitution,
    updateInstitution,
    getInstitutions,
    deleteInstitution,
};