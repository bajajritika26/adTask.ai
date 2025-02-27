import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = () => {
    const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append("grant_type", "password");
      formData.append("username", credentials.username);
      formData.append("password", credentials.password);
  
      const res = await axios.post("https://dev.adtask.ai/token", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      });
  
      const userData = { name: credentials.username }; 
  
      localStorage.setItem("user", JSON.stringify(userData)); 
      setResponse(res.data);
      navigate("/"); 
  
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };
  

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 ">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        
        {error && <div className="alert alert-danger text-center">{error}</div>}
        {response && (
          <div className="alert alert-success text-center">
            Login successful!
          </div>
        )}

        <div className="mb-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="btn btn-primary w-100 mb-4"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* {response && (
          <pre className="mt-3 alert alert-success">
            {JSON.stringify(response, null, 2)}
          </pre>
        )} */}
        <p>New User ? <span className="cursor-pointer text-primary" onClick={()=>navigate('/register')} >Register</span></p>
      </div>
    </div>
  );
};

export default Login;