import Home from "./pages/Home";
import {Route , createBrowserRouter ,RouterProvider, Routes, BrowserRouter} from "react-router-dom";
import Error from "./pages/Error";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./pages/Cart";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";

function App() {
    const data = useSelector((state)=> state.cart.itemList);
    console.log(data);
    return (
        <ChakraProvider>
           
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                </Routes>
            </BrowserRouter>
          

        </ChakraProvider>
    );
}

export default App;
