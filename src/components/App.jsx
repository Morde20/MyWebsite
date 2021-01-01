import React from "react";
import "../bootstrapStyle.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Skills from "./Skills";
import MyNavbar from "./MyNavbar";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className='stars'>
      <div className='twinkling'>
        <MyNavbar />
        <Header />
        <Body />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
