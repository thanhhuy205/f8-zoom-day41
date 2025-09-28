import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import Loading from "./components/Loading/index.tsx";
import store from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Loading />
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>
);
