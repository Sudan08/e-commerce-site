import Home from "./pages/Home";
import {Route , createBrowserRouter ,RouterProvider, Routes, BrowserRouter} from "react-router-dom";
import Error from "./pages/Error";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./pages/Cart";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import Signup from "./pages/Signup";

function App() {
    const data = useSelector((state)=> state.cart.itemList);
    console.log(data);
    return (
        <ChakraProvider>
           
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Cart" element={<Cart />}></Route>
                    <Route path="Signup" element={<Signup />}></Route>
                    <Route path="register" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
          

        </ChakraProvider>
    );
}

export default App;
