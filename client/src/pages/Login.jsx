import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { response, data } = await loginUser(userData);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUser(data.user);

        toast.success(`Welcome back, ${data.user.name}!`);

        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            DevConnect
          </h1>

          <p className="mt-2 text-slate-500">
            Connect. Collaborate. Grow.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl text-center font-semibold">
            Welcome Back
          </h2>

          <p className="mt-2 text-center text-slate-500">
            Sign in to continue.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>

              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit">
              Login
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}