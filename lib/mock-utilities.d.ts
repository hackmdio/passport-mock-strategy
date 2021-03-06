import { Application } from 'express';
import * as passportModule from 'passport';
import { User } from './mock-user';
export declare type SerializeFn = (user: User, done: (error: any, id: string) => void) => void;
export declare type DeserializeFn = (id: string, done: (error: any, user?: User) => void) => void;
/**
 * Sets up user serialization and deserialization for a given passport instance.
 * @param {Passport} passport The passport instance to use.
 * @param {Function} deserializeFn A custom deserialization function, otherwise the default will be used.
 * @param {Function} serializeFn A custom serialization function, otherwise the default will be used.
 */
export declare function setupSerializeAndDeserialize(passport: passportModule.Authenticator, serializeFn?: SerializeFn | null, deserializeFn?: DeserializeFn | null): void;
/**
 * Initializes the passport instance and connects it to the given node app.
 * @param {Object} app A node app to connect the passport instance to.
 * @param {Passport} passport The passport instance.
 */
export declare function connectPassport(app: Application, passport: passportModule.Authenticator): void;
