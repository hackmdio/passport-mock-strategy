"use strict";
var createMockPassport = require("./create-mock-passport");
var createMockStorage = require("./mock-storage");
var mockUser = require("./mock-user");
var mock_utilities_1 = require("./mock-utilities");
var Strategy = require("./passport-mock-strategy");
var exportModule = Strategy;
exportModule.MockStrategy = Strategy;
exportModule.Strategy = Strategy;
exportModule.mockUser = mockUser;
exportModule.setupSerializeAndDeserialize = mock_utilities_1.setupSerializeAndDeserialize;
exportModule.connectPassport = mock_utilities_1.connectPassport;
exportModule.createMockPassport = createMockPassport;
exportModule.createMockStorage = createMockStorage;
module.exports = exportModule;
