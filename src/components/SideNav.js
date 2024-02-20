import './SideNav.css';

const SideNav = () => {

    const langMenu = [
        { icon: 'H', nav: 'Home' },
        { icon: 'P', nav: 'Python' },
        { icon: 'R', nav: 'R' },
        { icon: 'J', nav: 'Java' },
        { icon: 'C', nav: 'Calendar' },
    ];

    const userOptionsMenu = [
        { icon: 'M', nav: 'Message' },
        { icon: 'L', nav: 'Logout' }
    ]

    // bonus: on hover show Menu name
    return (
        <div className="sidenav-container">
            <div className="sidenav-menu-item">CX</div>
            <div>
                { langMenu.map( item => <div className="sidenav-menu-item">{item.icon}</div>)}
            </div>
            <div>
                { userOptionsMenu.map( item => <div className='sidenav-menu-item'>{item.icon}</div>)}
            </div>
        </div>
    ) 
}

export default SideNav;