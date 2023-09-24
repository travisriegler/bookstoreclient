import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import reduxThunk from 'redux-thunk';
import reducers from '../module';
import { SnackbarProvider } from 'notistack'
import { MemoryRouter } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const renderWithRedux = (
        ui,
        {
            initialState,
            store = createStoreWithMiddleware(reducers, initialState),
            useMemoryRouter = false
        }
    ) => ({
        ...render(
            
            <Provider store={store}>
                {useMemoryRouter
                    ? (
                        <MemoryRouter>
                            <SnackbarProvider maxSnack={3}>
                                    {ui}
                            </SnackbarProvider>
                        </MemoryRouter>
                    )
                    : (
                        <SnackbarProvider maxSnack={3}>
                                {ui}
                        </SnackbarProvider>
                    )
                }
            </Provider>
        )

})

export default renderWithRedux;