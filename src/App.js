import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import UserAuth from "./components/UserAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Alert />
      <UserAuth />
    </div>
  );
}

export default App;
