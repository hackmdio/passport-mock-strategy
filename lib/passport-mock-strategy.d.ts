import { Request } from 'express';
import { Strategy } from 'passport';
import { User } from './mock-user';
declare namespace MockStrategy {
    interface MockStrategyOptions {
        name?: string;
        user?: User;
        passReqToCallback?: true;
    }
    type DoneCallback = (error: Error, user?: User, info?: any) => void;
    interface VerifyFunction {
        (req: Request, user: User, done: DoneCallback): void;
        (user: User, done: DoneCallback): void;
    }
}
/**
 * Mock Passport Strategy for testing purposes.
 * @extends Strategy
 */
declare class MockStrategy extends Strategy {
    private _user;
    private _verify?;
    private _passReqToCallback;
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
    constructor(options?: MockStrategy.MockStrategyOptions, verify?: MockStrategy.VerifyFunction);
    /**
     * Authenticate request. Always authenticates successfully by default
     * unless instructed otherwise through `verify` callback that was
     * passed to the constructor.
     *
     * @param {Object} req
     */
    authenticate(req?: Request): void;
}
export = MockStrategy;
