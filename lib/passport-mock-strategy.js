"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var passport_1 = require("passport");
/**
 * Mock Passport Strategy for testing purposes.
 * @extends Strategy
 */
var MockStrategy = /** @class */ (function (_super) {
    __extends(MockStrategy, _super);
    /**
     * The MockStrategy constructor.
     *
     * This allows you to test authenticated routes using a mock strategy.
     * It will automatically authenticate a mock user which then allows the
     * functionality of authenticated routes to be tested independent of
     * the authentication process.
     *
     * Note: This strategy is meant for testing purposes only.
     * It provides no actually security.
     *
     * Optionally an `options` object can be passed to custom configure the Strategy.
     * options = {
     *  name: String - The name of the strategy, defaults to 'mock'
     *  user: Object - The mock user to be authenticated, defaults to ./mock-user.js
     *  passReqToCallback: Boolean - When true `req` is the first argument to the
     *                                  verify callback, defaults to false
     * }
     *
     * A `verify` callback can also optionally passed which accepts `user`
     * which is the user that was authenticated and then calls the `done`
     * callback supplying a `user`. Optionally an error can be set as the
     * first argument in `done` if needed for testing.
     *
     * Calling the constructor with no parameters while create a default mock
     * strategy which a mock user exported from `./mock-user.js`.
     *
     *  @param {Object} options
     *  @param {Function} verify
     */
    function MockStrategy(options, verify) {
        var _this = this;
        // Allows verify to be passed as the first parameter and options skipped
        if (typeof options === 'function') {
            verify = options;
            options = undefined;
        }
        options = options || {};
        _this = _super.call(this) || this;
        _this.name = options.name || 'mock';
        _this._user = options.user || require('./mock-user');
        _this._verify = verify;
        _this._passReqToCallback = options.passReqToCallback || false;
        return _this;
    }
    /**
     * Authenticate request. Always authenticates successfully by default
     * unless instructed otherwise through `verify` callback that was
     * passed to the constructor.
     *
     * @param {Object} req
     */
    MockStrategy.prototype.authenticate = function (req) {
        var _this = this;
        // If no verify callback was specified automatically authenticate
        if (!this._verify) {
            return this.success(this._user);
        }
        var verified = function (error, user, info) {
            if (error) {
                return _this.error(error);
            }
            if (!user) {
                return _this.fail(info);
            }
            _this.success(user, info);
        };
        try {
            if (this._passReqToCallback && req) {
                this._verify(req, this._user, verified);
            }
            else {
                this._verify(this._user, verified);
            }
        }
        catch (e) {
            return this.error(e);
        }
    };
    return MockStrategy;
}(passport_1.Strategy));
module.exports = MockStrategy;
