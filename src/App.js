import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <Layout>    
      <Switch>  
        <Route path="/" exact> 
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
