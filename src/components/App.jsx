import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { LandingPage } from "../pages/LandingPage";


export const App = () => {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>PELÍCULAS</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element = {<LandingPage/>}/>               
                    <Route path="/movies/:movieId" element = {<MovieDetails/>}/>                   
                </Routes>
            </main>
        </Router>
    );
}