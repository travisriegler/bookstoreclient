import BookFilter from "./BookFilter";
import StyledBookContainer from "./StyledBookContainer"
import { useDispatch, useSelector } from "react-redux";
import { getBooksSelector, getBookPromiseSelector } from "../../module/book/bookSelector";
import { getBooksAction } from '../../module/book/bookAction'
import { useEffect } from "react";
import BookList from "./BookList";
import { Skeleton, Box } from "@mui/material";
import StyledBookList from "./StyledBookList";


const BookContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch])

    const books = useSelector(getBooksSelector);
    const bookPromise = useSelector(getBookPromiseSelector);

    return (
        <StyledBookContainer>
            <BookFilter />
            <StyledBookList ml={5}>
                {bookPromise.isPending && <Box ml={5}><Skeleton data-testid='book-loader' variant='rect' animation='pulse' width='80%' height={200}/></Box>}
                {bookPromise.isErrorOcurred && <div data-testid="book-error-message">Error Message... </div>}
                <BookList books={books}/>
            </StyledBookList>
        </StyledBookContainer>
    )
}

export default BookContainer;