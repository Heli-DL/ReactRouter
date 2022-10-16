import './App.css';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to React Router</h2>
      </header>
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route exact path="/"element={<Home />} />
          <Route path="/about"element={<About />} />
          <Route path="/contact"element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
