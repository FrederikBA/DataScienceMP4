import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul className='header'>
                <li><NavLink activeclassname='active' to='/'>Map</NavLink></li>
                <li><NavLink activeclassname='active' to='/predict'>Predict Company Location</NavLink></li>
                <li><NavLink activeclassname='active' to='/3d'>3D Graph</NavLink></li>
                <li><NavLink activeclassname='active' to='/victory'>Victory Charts</NavLink></li>
            </ul>
        </div >
    )
}

export default Header