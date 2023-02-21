import React from "react";
import Crypto from "./pages/Crypto/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Index";
import { GlobalStyle } from "./Styled";

import CryptoDetails from "./pages/CryptoDetails/Index";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header text="Coins Search" />
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path=":id" element={<CryptoDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
