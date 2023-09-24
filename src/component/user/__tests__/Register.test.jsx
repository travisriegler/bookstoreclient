import React from "react";
import Register from "../Register";
import renderWithRedux from "../../../util/testUtil";
import { fireEvent, waitFor } from "@testing-library/react";
import { registerAction } from "../../../module/user/userAction";

jest.mock("../../../module/user/userAction")
describe("Register form", () => {

    it("should exist name, email, password field and register btn", () => {
        const { getByLabelText, getByText } = renderWithRedux(<Register />, { useMemoryRouter: true })

        expect(getByLabelText("Enter email address")).toBeInTheDocument();
        expect(getByLabelText("Enter password")).toBeInTheDocument();
        expect(getByLabelText("Enter username")).toBeInTheDocument();
        expect(getByText("Register")).toBeInTheDocument();
    })



    it("should show required error message when register is clicked", async () => {
        const { findByText, getByText } = renderWithRedux(<Register />, { useMemoryRouter: true });

        fireEvent.submit(getByText('Register'));

        expect(await findByText('Email is required')).toBeInTheDocument();
        expect(await findByText('Password is required')).toBeInTheDocument();
        expect(await findByText('Username is required')).toBeInTheDocument();
    })



    it("should show email, password invalid error message", async () => {
        const { findByText, getByText, getByLabelText } = renderWithRedux(<Register />, { useMemoryRouter: true });

        fireEvent.change(getByLabelText("Enter email address"), { target: { value: "invalid email" } });
        fireEvent.change(getByLabelText("Enter password"), { target: { value: "pass" } });
        fireEvent.change(getByLabelText("Enter username"), { target: { value: "user" } });

        fireEvent.submit(getByText('Register'));

        expect(await findByText('Enter a valid email')).toBeInTheDocument();
        expect(await findByText('Password should be of minimum 8 char length')).toBeInTheDocument();
    
    })



    it("should call register action with user data", async () => {
        const { getByText, getByLabelText } = renderWithRedux(<Register />, { useMemoryRouter: true });

        registerAction.mockImplementation(() => (dispatch) => {})


        fireEvent.change(getByLabelText("Enter email address"), { target: { value: "peter@gmail.com" } });
        fireEvent.change(getByLabelText("Enter password"), { target: { value: "passwordhello" } });
        fireEvent.change(getByLabelText("Enter username"), { target: { value: "TravisRiegler" } });

        fireEvent.submit(getByText('Register'));

        await waitFor(() => {
            expect(registerAction).toHaveBeenCalledWith({
                name: "TravisRiegler",
                email: "peter@gmail.com",
                password: "passwordhello"
            });
        });
    });
});