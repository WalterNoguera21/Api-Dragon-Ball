import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";



const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: 0, width: 200, backgroundColor: "#ff2f00",fontSize:20}} variant="contained">HOME PAGE</Button>
        </Link>
        <Link to={"/character/Human"}>
          <Button sx={{marginTop: 4, width: 200 , backgroundColor: "#ff2f00",fontSize:20}} variant="contained">HUMANS</Button>  
        </Link>
        <Link to={"/character/not human"}>
          <Button sx={{marginTop: 4, width: 200, backgroundColor: "#ff2f00",fontSize:20}} variant="contained">NOT HUMANS</Button>
        </Link>
        <Link to={"/About"}>
          <Button sx={{marginTop: 4, width: 200 ,backgroundColor: "#FF6A00",fontSize:20}} variant="contained">ABOUT</Button>
        </Link>
    </nav>
  )
}

export default NavBar