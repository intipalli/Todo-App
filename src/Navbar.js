import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Todo App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: 'navy',
          borderRadius: '8px' 
        }}>New Todo</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;