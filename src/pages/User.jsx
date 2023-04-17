import { FaCodepen, FaUserFriends, FaStore, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/layouts/Spinner";
import GithubContext from "../components/context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const { getUser, user, isLoading } = useContext(GithubContext);

  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12 '>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search{" "}
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='avatar  mb-6 md:mb-0'>
            <div className='rounded  '>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
            </div>
          </div>

          <div className='cols-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {name}

                <div className='ml-2 mr- badge badge-success'>{type}</div>

                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p> {bio} </p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn  btn-outline'
                >
                  {" "}
                  Visit Github Profile{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
