export const USER_INITIAL_STATE = {
    token: window.localStorage.getItem('bookstore-token'),
    promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOcurred: false
    },
    registerPromise: {
        isPending: false,
        isFulfilled: false,
        isErrorOcurred: false
    },
    user: null
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_LOGIN': {
            return {
                ...state,
                token: action.payload.token
            }
        }
        case 'USER_PENDING': {
            return {
                ...state,
                promise: {
                    isPending: true, 
                    isFulfilled: false, 
                    isErrorOcurred: false
                }
            }
        }
        case 'USER_ERROR': {
            return {
                ...state,
                promise: {
                    isPending: false, 
                    isFulfilled: false, 
                    isErrorOcurred: true
                }
            }
        }
        case 'USER_SUCCESS': {
            return {
                ...state,
                promise: {
                    isPending: false, 
                    isFulfilled: true, 
                    isErrorOcurred: false
                }
            }
        }

        //register actions
        case 'USER_REGISTER': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'USER_REGISTER_PENDING': {
            return {
                ...state,
                registerPromise: {
                    isPending: true, 
                    isFulfilled: false, 
                    isErrorOcurred: false
                }
            }
        }
        case 'USER_REGISTER_ERROR': {
            return {
                ...state,
                registerPromise: {
                    isPending: false, 
                    isFulfilled: false, 
                    isErrorOcurred: true
                }
            }
        }
        case 'USER_REGISTER_SUCCESS': {
            return {
                ...state,
                registerPromise: {
                    isPending: false, 
                    isFulfilled: true, 
                    isErrorOcurred: false
                }
            }
        }
        default: {
            return state;
        }
    }
};

export default userReducer;

