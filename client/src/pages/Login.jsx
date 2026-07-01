import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const { response, data } = await loginUser(userData);
    if (response.ok) {
      localStorage.setItem("token", data.token);
      setUser(data.user);

      toast.success("Welcome Back!")

      navigate("/dashboard");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input

          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;