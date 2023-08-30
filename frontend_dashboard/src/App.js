import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/" element = {<Home />} />
          <Route path = "*" element = {<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
