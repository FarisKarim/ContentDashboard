import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          {/* Adding other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
