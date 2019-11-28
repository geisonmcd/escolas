const database = require('infra/database');

const saveInstitution = function (institution){
    console.log('taliho');
    console.log(institution);
    database.none(`insert into institution (name) values ($1)`, [institution.name])
};

const getInstitutions = function() {
    return database.query(`select * from institution`);    
};

module.exports = {
    saveInstitution,
    getInstitutions
};