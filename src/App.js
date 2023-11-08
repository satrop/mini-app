import { Route, Switch } from 'react-router-dom';

import AllMeetUps from './pages/AllMeetUps';
import NewMeetUp from './pages/NewMeetUp';
import Favorites from './pages/Favorites';
import MainNav from './components/layout/MainNav';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <MainNav />
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetUps />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetUp />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
