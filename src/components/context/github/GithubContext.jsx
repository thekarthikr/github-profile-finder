import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_URL}/users`);
    const data = await res.json();
    setUsers(data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        isLoading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
