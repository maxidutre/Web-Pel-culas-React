// import { MoviesGrid } from "./MoviesGrid/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "../pages//MoviesDetails/MovieDetails";
import { LandingPage } from "../pages/LandingPage/LandingPage";


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
                    <Route exact path="/" element = {<LandingPage/>}/>               
                    <Route path="/movies/:movieId" element = {<MovieDetails/>}/>                   
                </Routes>
            </main>
        </Router>
    );
}