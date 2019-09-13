import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <MoreInfo />
        <Footer />
      </div>
    );
  }
}

export default App;