import React from "react";
import { DataProvider } from "./DataContext";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Section />
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
