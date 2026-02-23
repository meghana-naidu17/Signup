import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function AuthContainer({ setIsAuthenticated }) {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="auth-wrapper">
      {isSignIn ? (
        <SignIn
          setIsSignIn={setIsSignIn}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

export default AuthContainer;