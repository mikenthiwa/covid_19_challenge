import React from 'react';
import Totals from "../components/totals";
import Countries from "../components/countries";
import Header from '../components/header';
import './app.scss';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <div className="detail-container">
              <div className="total-section">
                  <Totals />
              </div>
              <div className="country-section">
                  <Countries />
              </div>
          </div>
        </div>
    );
  }
}

export default App;
