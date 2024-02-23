import './TopNav.css';

const TopNav = () => {
    return (
        <div className="topnav-container">
            <div className='topnav-header-btn'>
                <div className='topnav-title'>Marketplace Comparison</div>
                <button className="topnav-btn">Download report</button>
            </div>
            <div><img src='/images/dots-icon.png' width='20' height='20' /></div>
        </div>
    )
}

export default TopNav;