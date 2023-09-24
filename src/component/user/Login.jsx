import { Button, Typography, Link } from "@mui/material";
import StyledWrapper from "./StyledWrapper";
import StyledPaper from "./StyledPaper";
import StyledTopMargin from "./StyledTopMargin";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../module/user/userAction';
import { getUserPromise } from "../../module/user/userSelector";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const validationSchema = yup.object({
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup.string('Enter your password').min(8, 'Should be minimum of 8 char length').required('Password is required')
})

const Login = () => {

    const dispatch = useDispatch();
    const loginPromise = useSelector(getUserPromise);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginPromise.isErrorOcurred) {
            enqueueSnackbar("Username or password is wrong", {
                variant: 'error'
            });
        } else if (loginPromise.isFulfilled) {
            enqueueSnackbar("Login Success", {
                variant: 'success'
            });
            navigate('/');
        }

    }, [loginPromise, enqueueSnackbar, navigate])

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema,
        onSubmit: (values) => {
            dispatch(loginAction(values.email, values.password))
        }
    })

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <StyledWrapper>
                <StyledPaper>
                    <Typography variant="h4">Book Store Login</Typography>
                    <StyledTopMargin 
                        name='email'
                        id="email"
                        data-testid="email-testid"
                        label="Enter email address"
                        variant="outlined"
                        placeholder="Enter email address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    <StyledTopMargin 
                        name='password'
                        type="password"
                        id="password"
                        data-testid="password-testid"
                        label="Enter password"
                        variant="outlined"
                        placeholder="Enter password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{marginTop: '2rem'}} disabled={loginPromise.isPending}>
                        Login
                    </Button>
                    <br />
                    <Link component="button" variant="body2" onClick={handleRegister}>Register</Link>
                </StyledPaper>
            </StyledWrapper>
        </form>
    )
}

export default Login