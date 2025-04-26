// import { IoMdNotifications } from "react-icons/io";
import './Navbar.css'

function Navbar(){
    return(
      
      <div className='navbar'>
        <div className="left">
         <h1>Dribbble</h1>
        </div>
        <div className="mid">
          <a href="#">Explore</a>
          <a href="#">Hire a designer</a>
          <a href="#">Find jobs</a>
          <a href="#">Blog</a>
        </div>
        <div className="right">
       
        {/* <IoMdNotifications  size={23}/> */}
        <div className="profile">V</div>
        </div>

      </div>
      
    )
  }
  
  export default Navbar;
  