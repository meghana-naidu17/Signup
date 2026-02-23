function DashBoard({ setIsAuthenticated }) {
  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard 🎉</h1>
      <button onClick={() => setIsAuthenticated(false)}>Logout</button>
    </div>
  );
}

export default DashBoard;