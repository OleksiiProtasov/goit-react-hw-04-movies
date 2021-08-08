// import styles from './App.module.css'
import { Route, Switch } from "react-router-dom";
import Container from "./Components/Container";

import AppBar from "./Components/AppBar/AppBar";
import HomePage from "./Components/Pages/HomePage";
import Movies from "./Components/Pages/MoviesPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";

import MovieId from "./Components/Pages/MovieDetailsPage";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomePage}>
          <HomePage />
        </Route>

        <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="/Movies/:MovieId" component={MovieId}></Route>
        <Route>
          {" "}
          <NotFoundPage />{" "}
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
