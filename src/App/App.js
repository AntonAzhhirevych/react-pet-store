import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../Pages/HomePage/HomePage';
import About from '../Pages/AboutPage/AboutPage';
import Pets from '../Pages/PetsPage/PetsPage';
import Pet from '../Pages/PetPage/PetPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pets/:id" component={Pet} />
        <Route path="/pets" component={Pets} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
