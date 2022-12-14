import Home from "./pages/Home";
import {Route , createBrowserRouter ,RouterProvider, Routes, BrowserRouter} from "react-router-dom";
import Error from "./pages/Error";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./pages/Cart";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import WomensPage from "./pages/WomensPage";
import MenPage from "./pages/MenPage";
import ItemPage from "./pages/ItemPage";

function App() {

    return (
        <ChakraProvider>
           
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Cart" element={<Cart />}></Route>
                    <Route path="Signup" element={<Signup />}></Route>
                    <Route path="Register" element={<Register />}></Route>
                    <Route path="Women" element={<WomensPage />}></Route>
                    <Route path="Men" element={<MenPage />}></Route>
                    <Route path="/item/:id" element={<ItemPage />}></Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
