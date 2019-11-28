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

const getInstitutionWithUserReview = function (idInstitution, idUser) {
    return database.oneOrNone(`
        select 
            i.*,
            row_to_json(r.*) as review
        from 
            institution i
        left join
            review r on (r.id_institution = i.id_institution and r.id_app_user = $2)
        where
            i.id_institution = $1`,
        [idInstitution, idUser]);
};

const saveReview = function (idInstitution, idUser, review) {
    database.none("insert into review (id_app_user, id_institution, grade, opinion) values ($1, $2, $3, $4)", [idUser, idInstitution,  review.grade, review.opinion]);
};

const updateReview = function (idReview, review) {
    database.none("update review set grade = $2, opinion = $3 where id_review = $1", [idReview, review.grade, review.opinion]);
};

module.exports = {
    saveInstitution,
    updateInstitution,
    getInstitutions,
    deleteInstitution,
    getInstitutionWithUserReview,
    saveReview,
    updateReview
};