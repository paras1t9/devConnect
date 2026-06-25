import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    console.log(token);
    console.log({
      Authorization: `Bearer ${token}`,
    });

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          navigate("/");
          return;
        }

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Dashboard;