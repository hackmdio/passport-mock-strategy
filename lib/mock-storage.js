"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var es6_promise_1 = require("es6-promise");
/**
 * Creates and returns a mock storage object.
 */
function createMockStorage() {
    var storage = {};
    /**
     * Fetches a user with the given id from the storage.
     * @param {String} id - The id of the user to fetch.
     * @returns {Promise} A promise that resolve to a user.
     */
    function fetchUser(id) {
        return new es6_promise_1.Promise(function (resolve) { return resolve(storage[id] || null); });
    }
    /**
     * Saves a user to a storage and then returns the user.
     * @param user - The user to save to the storage.
     * @returns {Promise<User>} A promise that resolves to a user.
     */
    function saveUser(user) {
        return new es6_promise_1.Promise(function (resolve) {
            storage[user.id] = __assign({}, user);
            return resolve(user);
        });
    }
    return { fetchUser: fetchUser, saveUser: saveUser };
}
module.exports = createMockStorage;
