import { Promise } from 'es6-promise';
import { User } from './mock-user';
declare namespace createMockStorage {
    interface MockStorage {
        fetchUser: (id: string) => Promise<User>;
        saveUser: (user: User) => Promise<User>;
    }
}
/**
 * Creates and returns a mock storage object.
 */
declare function createMockStorage(): createMockStorage.MockStorage;
export = createMockStorage;
