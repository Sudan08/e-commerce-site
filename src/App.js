import {Route, Routes, BrowserRouter} from "react-router-dom";
import { QueryClient ,QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import Signup from "./pages/Signup";
import Register from "./pages/Register";
import {WomensPage} from "./pages/WomensPage";
import MenPage from "./pages/MenPage";
import ItemPage from "./pages/ItemPage";

const queryClient = new QueryClient(); 

function App() {

    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
}

export default App;
