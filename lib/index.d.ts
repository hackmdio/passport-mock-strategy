import createMockPassport = require('./create-mock-passport');
import createMockStorage = require('./mock-storage');
import { User } from './mock-user';
import { connectPassport, setupSerializeAndDeserialize } from './mock-utilities';
import Strategy = require('./passport-mock-strategy');
/**
 * Export MockStrategy.
 */
declare namespace MockStrategy {
    type Export = typeof Strategy & {
        MockStrategy: typeof Strategy;
        Strategy: typeof Strategy;
        mockUser: User;
        setupSerializeAndDeserialize: typeof setupSerializeAndDeserialize;
        connectPassport: typeof connectPassport;
        createMockPassport: typeof createMockPassport;
        createMockStorage: typeof createMockStorage;
    };
}
declare const _default: MockStrategy.Export;
export = _default;
