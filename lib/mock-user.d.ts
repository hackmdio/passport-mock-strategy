declare namespace mockUser {
    interface User {
        id: string;
        displayName?: string;
        name: {
            familyName: string;
            givenName: string;
        };
        emails: [{
            value: string;
            type: string;
        }];
        provider: string;
    }
}
declare const mockUser: mockUser.User;
export = mockUser;
