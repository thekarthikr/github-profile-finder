import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className='navbar shadow-lg mb-12 bg-neutral text-neutral-content'>
      <div className='mx-auto container'>
        <div className='flex-none text-3xl pr-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='font-bold align-middle text-lg'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-rounded btn-sm'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-rounded btn-sm'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
