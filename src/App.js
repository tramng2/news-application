import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import CardDetail from './components/CardDetail' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home data/>} />
          <Route path="/about" exact component={About} />
          <Route path="/:index/:title/:author" render={() => <CardDetail/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
