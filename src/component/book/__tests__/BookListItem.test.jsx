import BookList from '../BookList';
import BookListItem from "../BookListItem";
import { render } from '@testing-library/react';


describe('BookListItem', () => {
    it('should render booklistitem without error', () => {
        const book = {
            id: '1',
            title: "test title99",
            description: "desc",
            releaseYear: 2019
        };

        const { getByText, getAllByText } = render(<BookListItem book={book} />);

        expect(getAllByText('test title99')[0]).toBeInTheDocument();
        expect(getByText("desc")).toBeInTheDocument();
        expect(getByText("2019")).toBeInTheDocument();

    })
})
