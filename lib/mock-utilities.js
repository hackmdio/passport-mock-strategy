"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockUser = require("./mock-user");
var defaultSerialize = function (user, done) {
    return done(null, user.id);
};
var defaultDeserialize = function (id, done) {
    if (id === mockUser.id) {
        done(null, mockUser);
    }
    else {
        done(new Error("No such user with id " + id));
    }
};
/**
 * Sets up user serialization and deserialization for a given passport instance.
 * @param {Passport} passport The passport instance to use.
 * @param {Function} deserializeFn A custom deserialization function, otherwise the default will be used.
 * @param {Function} serializeFn A custom serialization function, otherwise the default will be used.
 */
function setupSerializeAndDeserialize(passport, serializeFn, deserializeFn) {
    passport.serializeUser(serializeFn || defaultSerialize);
    passport.deserializeUser(deserializeFn || defaultDeserialize);
}
exports.setupSerializeAndDeserialize = setupSerializeAndDeserialize;
/**
 * Initializes the passport instance and connects it to the given node app.
 * @param {Object} app A node app to connect the passport instance to.
 * @param {Passport} passport The passport instance.
 */
function connectPassport(app, passport) {
    app.use(passport.initialize());
    app.use(passport.session());
}
exports.connectPassport = connectPassport;
