import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { registerUser } from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
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
      const { response, data } = await registerUser(userData);

      if (response.ok) {
        toast.success("Account created successfully!");

        navigate("/");
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
            Create your account
          </h2>

          <p className="mt-2 text-center text-slate-500">
            Join the developer community.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>

              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>

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
                placeholder="Create a password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}