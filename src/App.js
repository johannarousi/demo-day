import React, { Component } from "react";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="phone-screen">
        <Header />
        <Searchbox />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
