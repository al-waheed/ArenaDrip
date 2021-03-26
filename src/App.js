import React from "react";

import Navbar from "./Navbar";
import Components from "./Components";
import Footer from "./Footer";
// import CarouselPics from "./CarouselPics";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CarouselPics/> */}
      <Components />
      <Footer />
    </div>
  );
}

export default App;
