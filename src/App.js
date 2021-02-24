import './App.css';
import { Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';
import CreatePage from './components/CreatePage';
import  NotePage  from './components/NotePage';
import 'firebase/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <div>
      <Switch>
        <PublicRoute exact path="/" component={Home}></PublicRoute>
        <PrivateRoute path="/create" component={CreatePage} />
        <PrivateRoute path="/note/:id" component={ NotePage } />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
