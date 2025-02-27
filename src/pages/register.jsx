import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await axios.post(
                "https://dev.adtask.ai/register",
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            // Store user details in localStorage
            localStorage.setItem("user", JSON.stringify(formData));

            setMessage({ type: "success", text: "Registration successful!" });

            // Redirect to home page or dashboard
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (error) {
            setMessage({
                type: "error",
                text: error.response?.data?.detail || "Registration failed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow-lg rounded-4 p-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Register</h2>
                {message && (
                    <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} text-center rounded-3`}>
                        {message.text}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" name="username" placeholder="Username" className="form-control rounded-3" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" name="email" placeholder="Email" className="form-control rounded-3" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="first_name" placeholder="First Name" className="form-control rounded-3" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="last_name" placeholder="Last Name" className="form-control rounded-3" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" name="password" placeholder="Password" className="form-control rounded-3" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3 rounded-pill" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                <p>Already registered? <span className="text-primary fw-bold cursor-pointer" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span></p>
            </div>
        </div>
    );
};

export default Register;
