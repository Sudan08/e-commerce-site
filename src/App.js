import Home from "./pages/Home";
import {Route , createBrowserRouter ,RouterProvider} from "react-router-dom";
import Error from "./pages/Error";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    const router = createBrowserRouter ([
        {
            path:"/",
            element : <Home />,
            errorElement: <Error />
            
        }]);
    return (
        <ChakraProvider>
            <RouterProvider router={router}></RouterProvider>
        </ChakraProvider>
    );
}

export default App;
