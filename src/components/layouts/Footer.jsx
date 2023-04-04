function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer footer-center p-10 bg-gray-700  text-gray-400 text-lg'>
      <p>Copyright &copy; {year} </p>
    </footer>
  );
}

export default Footer;
