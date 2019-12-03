import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./components/Home'));
const Players = React.lazy(() => import('./components/Players'));
const Teams = React.lazy(() => import('./components/Teams'));
const TeamPage = React.lazy(() => import('./components/TeamPage'));
const Articles = React.lazy(() => import('./components/Articles'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/players' component={Players} />
            <Route path='/teams' component={Teams} />
            <Route path='/:teamId' exact component={TeamPage} />
            <Route path='/:teamId/articles' component={Articles} />
            <Route
              render={() => <h1 className='text-center'>Four oh Four.</h1>}
            />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
