import { Typography, Box, TextField, Button } from "@mui/material";
import StyledBookFilter from "./StyledBookFilter";
import StyledBookFilterPaper from "./StyledBookFilterPaper";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getBooksByTitle } from "../../module/book/bookAction";

const BookFilter = () => {

    const [searchText, setSearchText] = useState();
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchClick = () => {
        dispatch(getBooksByTitle(searchText))
    }

    return (
        <StyledBookFilter>
            <StyledBookFilterPaper>
                <Typography>Search Book Filters</Typography>
                <Box paddingTop={3} marginBottom={2}>
                    <TextField 
                        placeholder="Enter book title"
                        id='book-search'
                        data-testid='book-title-input'
                        label='Enter book title'
                        variant='outlined'
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </Box>
                <Button onClick={handleSearchClick} variant='contained' color='primary'>
                    Search
                </Button>
            </StyledBookFilterPaper>
        </StyledBookFilter>
    );
}

export default BookFilter;