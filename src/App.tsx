import React from 'react';
import './App.scss';
import HomePage from './pages/home/home'
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import AuthorDetailsPage from './pages/authordetailspage/authordetailspage'
function App() {
  const history = createBrowserHistory()

  return (
        <Router history={history}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/author-details/:id" component={AuthorDetailsPage} />
      </Router>

  );
}

export default App;
