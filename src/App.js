import './App.css';
import './styles/Exchange.css';
import { currencyValues } from './data';
import Navbar from './components/Navbar';
import PurchaseForm from './components/PurchaseForm';
import LinkToOtherPage from './components/LinkToOtherPage';
import HeadFilter from './components/HeadFilter';
import ExchangeContainer from './components/ExchangeContainer';

export default function App() {

  return (
    <div className="App">
      <div className="mainContent">
        <Navbar />
          <div className="main">
            <LinkToOtherPage linkToPage={ "google.com" } namePage={ "Dashboard" } />

              <h1>Select items to add to the Purchase Order</h1>
              
              <HeadFilter/>

              <h1>Fill out the details for this Purchase Order</h1>

              <PurchaseForm />

              <ExchangeContainer data={ currencyValues } classToUse={ "exchangeContainer" }>
                  <div>
                      <div>
                          Exchange rate
                      </div>
                      <div>
                          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "14px" }}>
                              <path d="M16 10L9 3L2 10" stroke="#4E5361" strokeWidth="3"/>
                          </svg>
                      </div>
                  </div>
              </ExchangeContainer>
          </div>
      </div>
    </div>
  );
}
