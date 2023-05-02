import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path=":id" element={<Movie />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
