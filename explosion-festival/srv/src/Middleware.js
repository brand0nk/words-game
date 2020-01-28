// @flow

const db = require('./db/db.js');

function getUserSession(req, res, next) {
    var accessToken = req.body.accessToken;
    if(accessToken != null) {
        req.UID = -1;
    } else {
        req.UID = -1;
    }
    next();
}

// catch any users without a session and throw them to login
function gateAuthed(req, res, next) {
    if(req.UID != null) {
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = {getUserSession, gateAuthed};