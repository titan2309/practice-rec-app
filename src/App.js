import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserAuth from "./components/UserAuth";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
  };

  return (
    <div>
      <Navbar />
      <Alert alert={alert} />
      <UserAuth showAlert={showAlert} />
    </div>
  );
}

export default App;
