import MainPage from "./page/MainPage";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "./page/Basket";
import React, { useState } from "react";
import Modal from "./component/Modal";


function App() {
  const [isShown, setIsShown] = useState(false)
  return (
    <div className="App">
      <Router>
        <Header setIsShown={setIsShown} isShown={isShown} />
        <Routes>
          <Route path="/basket" element={<Basket />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
      {
        isShown && <Modal setIsShown={setIsShown} />
      }
    </div>
  );
}

export default App;
