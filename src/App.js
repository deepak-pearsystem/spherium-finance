import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Hyperswap from './components/Hyperswap/Hyperswap';
import Hyperlend from './components/hyperlend/Hyperlend';
import Hyperlaunch from './components/Hyperlaunch/Hyperlaunch';
import About from './components/About/About';
import Termsofservice from './components/Termsofservice/Termsofservice';
import Privacypolicy from './components/Privacypolicy/Privacypolicy';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Governance from './components/Governance/Governance';
import Wallet from  './components/Wallet/Wallet';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Contact from './components/Contact/Contact';
import Thanks from './components/Thanks/Thanks';
import Documentation from './components/Documentation/Documentation';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/hyperswap">
              <Hyperswap/>
            </Route>
            <Route exact path="/hyperlend">
              <Hyperlend/>
            </Route>
            <Route exact path="/hyperlaunch">
              <Hyperlaunch/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route path="/termsofservice">
              <Termsofservice/>
            </Route>
            <Route path="/privacypolicy">
              <Privacypolicy/>
            </Route>
            <Route path="/faq">
              <Faq/>
            </Route>
            <Route path="/governance">
              <Governance/>
            </Route>
            <Route path="/wallet">
              <Wallet/>
            </Route>
            <Route path="/tokenomics">
              <Tokenomics/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/documentation">
              <Documentation/>
            </Route>
            <Route path="/thanks">
              <Thanks/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
