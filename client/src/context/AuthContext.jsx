import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/api";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    const restoreSession = async () => {
      try {
        const { response, data } = await getProfile(token);
        if (response.ok) {
          setUser(data);
        } else {
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    restoreSession();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;

export function useAuth() {
  return useContext(AuthContext);
}