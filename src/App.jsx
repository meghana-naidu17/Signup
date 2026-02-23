import { useState } from "react";
import AuthContainer from "./components/AuthConatainer";
import DashBoard from "./components/DashBoard";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <DashBoard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <AuthContainer setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;