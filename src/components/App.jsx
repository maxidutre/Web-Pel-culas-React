import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <header>
                {/*<h1 className={styles.title}>PELÍCULAS</h1>*/}
                <Link to="/">Home</Link>
                <Link to="/movie">Movie</Link>
            </header>
            <main>                
                    <Route path="/movie">Movie</Route>
                    <Route path="/">Home</Route>
            </main>
        </Router>
    );
}