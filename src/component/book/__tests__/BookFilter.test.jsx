import BookFilter from '../BookFilter';
import renderWithRedux from '../../../util/testUtil';
import { fireEvent } from '@testing-library/react';
import { getBooksByTitle } from '../../../module/book/bookAction';

jest.mock('../../../module/book/bookAction');
describe('BookFilter', () => {

    it('should fire getBooksByTitle action on click of search button', () => {

        const { getByLabelText, getByText } = renderWithRedux(<BookFilter />, {});
        getBooksByTitle.mockImplementation(() => dispatch => {});
        
        const textField = getByLabelText('Enter book title');
        const searchButton = getByText('Search');

        fireEvent.change(textField, { target: { value: 'test title' } });
        fireEvent.click(searchButton);

        expect(getBooksByTitle).toHaveBeenCalledWith('test title');
    })
})