import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "@/Routes";
import { store } from "@/Store";
import { Setup } from "./Components/Atoms";

export const App = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Setup>
          <RouterProvider router={Router}></RouterProvider>
        </Setup>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
