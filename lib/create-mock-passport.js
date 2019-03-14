"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var passport = __importStar(require("passport"));
var mock_utilities_1 = require("./mock-utilities");
var MockStrategy = require("./passport-mock-strategy");
/**
 * Sets up a basic passport configuration using the default MockPassport instance.
 * @param {Object} app - The express server or any other connect style node.js server.
 * @returns {Object} mockPassport - The mock passport instance.
 */
function createMockPassport(app) {
    var mockPassport = new passport.Passport();
    mock_utilities_1.setupSerializeAndDeserialize(mockPassport);
    mockPassport.use(new MockStrategy());
    mock_utilities_1.connectPassport(app, mockPassport);
    return mockPassport;
}
module.exports = createMockPassport;
