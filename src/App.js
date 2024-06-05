import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserAuth from "./components/UserAuth";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(true);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(true);
    }, 1200);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/userAuth"
            element={<UserAuth showAlert={showAlert} />}
          />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
