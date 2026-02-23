import { useState } from "react";

function SignIn({ setIsSignIn, setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsAuthenticated(true);
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="auth-card">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <span onClick={() => setIsSignIn(false)}>Sign Up</span>
      </p>
    </div>
  );
}

export default SignIn;