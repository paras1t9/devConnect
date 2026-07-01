import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input"
import Button from "../components/common/Button";
import { registerUser } from "../services/api"
import toast from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const userData = {
      name,
      email,
      password,
    };

    try {
      const { response, data } = await registerUser(userData);
      if (!response.ok) {
        setError(data.message);
        return;
      }

      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <Button type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;