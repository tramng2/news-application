import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import CardDetail from './components/CardDetail' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { DataProvider } from "./DataContext"

function App() {

  return (
    <Router>
      <div className="App">
      <DataProvider>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home data/>} />
          <Route path="/about" exact component={About} />
          <Route path="/news/details/:index/:title" render={() => <CardDetail/>}/>
        </Switch>
    </DataProvider>
      </div>
    </Router>
  );
}

export default App;
