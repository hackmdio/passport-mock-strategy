import * as passport from 'passport';
import { Application } from 'express';
/**
 * Sets up a basic passport configuration using the default MockPassport instance.
 * @param {Object} app - The express server or any other connect style node.js server.
 * @returns {Object} mockPassport - The mock passport instance.
 */
declare function createMockPassport(app: Application): passport.Authenticator;
export = createMockPassport;
