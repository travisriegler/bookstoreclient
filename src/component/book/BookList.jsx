import { PropTypes } from 'prop-types';
import StyledBookList from './StyledBookList';
import BookListItem from './BookListItem';

const propTypes = {
    books: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    }).isRequired
}

const BookList = ({ books }) => {
    
    return (
        <StyledBookList ml={5}>
            {books.map((book) => {
                return <BookListItem book={book} key={book.id} />
            })}
        </StyledBookList>
    )
}

BookList.propTypes = propTypes;

export default BookList;