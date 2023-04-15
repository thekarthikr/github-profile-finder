import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../layouts/Spinner";
import UserItems from "./UserItems";

function UserResults() {
  const { users, isLoading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

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
