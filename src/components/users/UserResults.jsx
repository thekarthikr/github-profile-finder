import { useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";
import UserItems from "./UserItems";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`);
    const data = await res.json();
    setUsers(data);
    setIsLoading(false);
  };

  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
