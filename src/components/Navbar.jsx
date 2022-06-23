import React, { useEffect, useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [expand, setExpand] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpand(false);
    }, [location]);
  return (
    <div className='navbar' id={expand ? "open": "close"}>
        <div className="toggleButton">
            <button onClick={()=>{setExpand((prev)=> !prev)}}><ReorderIcon/></button>
        </div>
        <div className="links">
            <Link to="/">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/sobremi">Experiencia</Link>
        </div>
    </div>
  )
}

export default Navbar