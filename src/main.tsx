import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { HashRouter } from "react-router";
import App from "./App.tsx";
import Loading from "./components/Loading/index.tsx";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ReduxProvider store={store}>
        <Loading />
        <App />
      </ReduxProvider>
    </HashRouter>
  </StrictMode>
);
