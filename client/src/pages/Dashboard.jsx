import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="mb-4 text-3xl font-bold">
        Welcome back, {user?.name}!
      </h1>
      <p className="mt-2 text-slate-500">
        Look at what your fellow developers have post today!
      </p>
    </div>
  );
}