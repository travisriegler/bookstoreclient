import userReducer, { USER_INITIAL_STATE } from "../userReducer";

describe('userReducer', () => {
    it('should return new state for login user action', () => {
        const action = {
            type: 'USER_LOGIN',
            payload: {
                token: 'jwt token'
            }
        };

        const newState = userReducer(USER_INITIAL_STATE, action);

        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            token: 'jwt token'
        })
    })

})