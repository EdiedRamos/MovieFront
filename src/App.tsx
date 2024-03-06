import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { Router } from "@/Routes";
import { store } from "@/Store";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
};

export default App;
