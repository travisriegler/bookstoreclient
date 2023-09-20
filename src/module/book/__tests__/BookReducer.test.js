import bookReducer, { INITIAL_BOOK_REDUCER_STATE } from '../bookReducer'

describe('bookReducer', () => {
    it('should return right new state', () => {
        const action = {
            type: 'BOOKLIST',
            payload: [{
                id: 1,
                title: 'test title',
                description: 'desc',
                releaseYear: 2018
            }]
        }

        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);

        expect(newState).toEqual({
            books: [{
                id: 1,
                title: 'test title',
                description: 'desc',
                releaseYear: 2018
            }],
            promise: {
                isErrorOcurred: false,
                isFulfilled: false,
                isPending: false,
            }
        })
    })
})