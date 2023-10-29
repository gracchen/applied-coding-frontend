import './NavTab.css';

const NavTab = () => {

  return (
    <>
      <ul className="navlist"> 
        <div className="navlist-left">
          <li className="logo">Herox</li>
          <li><a href="#">Services</a></li> 
          <li><a href="#">Portfolio</a></li> 
          <li><a href="#">Contact Us</a></li> 
          <li><a href="#">About Us</a></li> 
        </div>
        <li><button>Register / Login</button></li>
      </ul> 
    </>
  );
}

export default NavTab;
