import { PropTypes } from 'prop-types';
import { Box, Typography } from '@mui/material';
import StyledBookListItemPaper from './StyledBookListItemPaper';
import StyledBookImage from './StyledBookImage';

const propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    }).isRequired
}


const BookListItem = ({ book }) => {
    return (
        <Box mb={2}>
            <StyledBookListItemPaper elevation={2}>
                <StyledBookImage variant='square'>
                    {book.title}
                </StyledBookImage>
                <Box ml={1}>
                    <Typography variant='h5'>{book.title}</Typography>
                    <Typography>{book.description}</Typography>
                    <Typography>{book.releaseYear}</Typography>
                </Box>
            </StyledBookListItemPaper>
        </Box>
    );
};

BookListItem.propTypes = propTypes;

export default BookListItem;