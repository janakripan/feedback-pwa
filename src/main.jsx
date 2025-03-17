import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApiProvider } from "./contexts/ApiContext.jsx";
import Home from "./pages/Home/Home.jsx";
import DisplayFeedback from "./pages/Display/DisplayFeedback.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="feedback" element={<DisplayFeedback/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>
);
