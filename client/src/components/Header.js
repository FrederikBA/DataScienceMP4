import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul className='header'>
                <li><NavLink activeclassname='active' to='/'>Map</NavLink></li>
            </ul>
        </div >
    )
}

export default Header