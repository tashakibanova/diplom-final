import React from 'react';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/main/HomePage";
import OrderPage from "./components/main/OrderPage";
import SuccessOrderPage from "./components/main/SuccessOrderPage";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Routes>
          <Route path="/order" element={<OrderPage />} />
          <Route path="/success" element={<SuccessOrderPage />} />
          <Route path="/" element={<HomePage />} />

          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
