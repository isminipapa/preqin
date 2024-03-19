import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Investors from "./pages/Investors";
import InvestorDetails from "./pages/InvestorDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Investors />} />
        <Route path="/investors/:firmId" element={<InvestorDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
