import React from "react";
import { DataProvider } from "./DataContext";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Components from "./Components";
import Footer from "./Footer";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Components />
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
