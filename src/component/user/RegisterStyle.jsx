import { Box, TextField, Paper, Button, Typography } from "@mui/material";
import { styled } from '@mui/system';



export const StyledWrapper = styled(Box)({
    margin: 'auto',
    width: '40%'
});

export const StyledPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
});

export const StyledTopMargin = styled(TextField)({
    marginTop: '12px'
});

export const StyledHeading = styled(Typography)({
    fontSize: 'larger',
    fontWeight: 'bold',
    textAlign: 'center'
});

export const StyledButton = styled(Button)({
    width: '25%',
    margin: '12px auto'
});

