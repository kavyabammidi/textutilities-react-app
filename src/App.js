import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.style.backgroundColor = newMode ? "#333" : "white";
      document.body.style.color = newMode ? "white" : "black";
      showAlert(newMode ? "Dark mode enabled!" : "Light mode enabled!");
      return newMode;
    });
  };

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
