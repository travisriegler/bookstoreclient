import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import renderWithRedux from "../../util/testUtil";

describe("App component", () => {
    it("Should render app without error", () => {
        const { asFragment } = renderWithRedux(<App />, {});
        expect(asFragment()).toMatchSnapshot();
    });
});