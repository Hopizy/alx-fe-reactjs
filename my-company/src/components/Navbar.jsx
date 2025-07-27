import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/About" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;

