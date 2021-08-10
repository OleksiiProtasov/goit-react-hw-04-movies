// import styles from './App.module.css'
import { Route, Switch } from "react-router-dom";
import Container from "./Components/Container";

import AppBar from "./Components/AppBar/AppBar";
import HomePage from "./Components/Pages/HomePage";
import Movies from "./Components/Pages/MoviesPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";

import MovieDetailsPage from "./Components/Pages/MovieDetailsPage";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/Movies/:MovieDetailsPageById">
          <MovieDetailsPage />
        </Route>

        <Route path="/Movies">
          <Movies />
        </Route>

        <Route>
          {" "}
          <NotFoundPage />{" "}
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
