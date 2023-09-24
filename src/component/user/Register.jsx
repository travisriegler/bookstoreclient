import * as yup from "yup";
import { Link } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../module/user/userAction";
import { StyledWrapper, StyledPaper, StyledTopMargin, StyledHeading, StyledButton } from "./RegisterStyle";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { getUserRegisterPromise } from "../../module/user/userSelector";
import { useEffect } from "react";

const validationSchema = yup.object({
    name: yup.string().required('Username is required'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required').min(8, 'Password should be of minimum 8 char length'),
})

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const registerPromise = useSelector(getUserRegisterPromise);

    useEffect(() => {
        if (registerPromise.isErrorOcurred) {
            enqueueSnackbar("Server error", {
                variant: 'error'
            });
        } else if (registerPromise.isFulfilled) {
            enqueueSnackbar("Register Success", {
                variant: 'success'
            });
            navigate('/login');
        }

    }, [registerPromise, enqueueSnackbar, navigate])

    const registerForm = useFormik({
        initialValues: { email: '', password: '', name: '' },
        validationSchema,
        onSubmit: (values) => {
          dispatch(registerAction(values));
        },
    });

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <StyledWrapper>
            <StyledHeading>User Registration</StyledHeading>
            <form autoComplete='off' noValidate onSubmit={registerForm.handleSubmit}>
                <StyledPaper>
                    <StyledTopMargin 
                        id="name"
                        name="name"
                        variant="outlined"
                        label="Enter username"
                        value={registerForm.values.name}
                        onChange={registerForm.handleChange}
                        helperText={registerForm.touched.name && registerForm.errors.name}
                        error={registerForm.touched.name && Boolean(registerForm.errors.name)}
                    />
                    <StyledTopMargin 
                        id="email"
                        name="email"
                        variant="outlined"
                        label="Enter email address"
                        value={registerForm.values.email}
                        onChange={registerForm.handleChange}
                        helperText={registerForm.touched.email && registerForm.errors.email}
                        error={registerForm.touched.email && Boolean(registerForm.errors.email)}
                    />
                    <StyledTopMargin 
                        id="password"
                        name="password"
                        type="password"
                        variant="outlined"
                        label="Enter password"
                        value={registerForm.values.password}
                        onChange={registerForm.handleChange}
                        helperText={registerForm.touched.password && registerForm.errors.password}
                        error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                    />
                    <StyledButton type="submit" variant="contained" color="primary" style={{marginTop: '2rem'}} disabled={registerPromise.isPending}>Register</StyledButton>
                    <Link component="button" variant="body2" onClick={handleLogin}>Login</Link>
                </StyledPaper>
            </form>
        </StyledWrapper>
    )
};

export default Register;