import './App.css';
import { Router, Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="App">
      <h1>Testing npm create-react-app</h1>
      <Route>
        <Link to="/">HOME</Link>
        <Link to="/dashboard">DASHBOARD</Link>
      </Route>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
      </Switch>
    </div>
  );
}

export default App;
