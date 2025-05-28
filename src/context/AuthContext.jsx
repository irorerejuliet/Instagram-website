import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../Lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription?.unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
