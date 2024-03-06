import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "@/Routes";
import { store } from "@/Store";

export const App = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
