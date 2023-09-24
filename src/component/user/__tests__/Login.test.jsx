import renderWithRedux from "../../../util/testUtil";
import Login from '../Login';
import { act, fireEvent, waitFor } from "@testing-library/react";
import { loginAction } from "../../../module/user/userAction";

jest.mock("../../../module/user/userAction")
describe('Login test', () => {

    it('should show required error message for email and password', async () => {
        const { findByText } = renderWithRedux(<Login />, { useMemoryRouter: true });

        const submitBtn = await findByText('Login');

        fireEvent.submit(submitBtn);

        expect(await findByText('Email is required')).toBeInTheDocument();
        expect(await findByText('Password is required')).toBeInTheDocument();
    });



    it('should show email and password invalid error message', async () => {
        const { findByText, findByLabelText } = renderWithRedux(<Login />, { useMemoryRouter: true });

        const emailField = await findByLabelText('Enter email address');
        const passwordField = await findByLabelText('Enter password');
        const submitBtn = await findByText('Login');

        act(() => {
            fireEvent.change(passwordField, { target: { value: 'wrong' } });
            fireEvent.change(emailField, { target: { value: 'wrong' }});
            fireEvent.submit(submitBtn);
        })

        expect(await findByText('Enter a valid email')).toBeInTheDocument();
        expect(await findByText('Should be minimum of 8 char length')).toBeInTheDocument();  
    });


    
    it('should call login action when email and password is valid', async () => {
        const { findByText, findByLabelText } = renderWithRedux(<Login />, { useMemoryRouter: true });

        loginAction.mockImplementation(() => (dispatch) => {})


        const emailField = await findByLabelText('Enter email address');
        const passwordField = await findByLabelText('Enter password');
        const submitBtn = await findByText('Login');

        await act(() => {
            fireEvent.change(passwordField, { target: { value: 'password' } });

            fireEvent.change(emailField, { target: { value: 'peter@gmail.com' }});
    
            fireEvent.submit(submitBtn);
        })

        await waitFor(() => {
            expect(loginAction).toHaveBeenCalledWith("peter@gmail.com", "password")
        })

    })

});