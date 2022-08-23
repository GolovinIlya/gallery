import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Layuot } from "./components/Layout/layout";
import { MainPage } from "./components/pages/main/main";
import { ThemeProvider } from "./components/provider/ThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layuot>
          <div className="container">
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </div>
        </Layuot>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
