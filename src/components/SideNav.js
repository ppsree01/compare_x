import { useState } from 'react';
import { menu, userOptionsMenu } from '../constants/constants';
import './SideNav.css';

const SideNav = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
        return false;
    }

    return (
        <div className="sidenav-container" onMouseOver={(e) => toggleMenu(e)} onMouseOut={toggleMenu}>
            <div className="sidenav-menu-item">CX</div>
            <div className='sidenav-menu'>
                { menu.map( (item, index) => 
                    <div key={index} className="sidenav-menu-item">
                        <img width='20' src={ item.selected ? item.active : item.inactive } />
                        <span className='sidenav-menu-label'>{ expanded && item.nav }</span>
                    </div>
                )}
            </div>
            <div className='sidenav-menu'>
                { userOptionsMenu.map( (item, index) => 
                    <div key={index} className='sidenav-menu-item' key={index}>
                        <img width='20' src={ item.selected ? item.active : item.inactive } />
                        <span className='sidenav-menu-label'>{ expanded && item.nav }</span>
                    </div>
                )}
            </div>
        </div>
    ) 
}

export default SideNav;