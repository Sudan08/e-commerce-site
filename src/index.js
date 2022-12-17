import { ColorModeScript } from '@chakra-ui/react';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from './theme';
import {Provider} from 'react-redux';
import {store} from '../src/store/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Provider store = {store}>
            <App/>
        </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
