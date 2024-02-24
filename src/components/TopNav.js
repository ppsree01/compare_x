import './TopNav.css';

const TopNav = () => {
    const downloadReport = () => {
        const pdfUrl = '/data/data.json';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "Report.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="topnav-container">
            <div className='topnav-header-btn'>
                <div className='topnav-title'>Marketplace Comparison</div>
                <button className="topnav-btn" onClick={downloadReport}>Download report</button>
            </div>
            <div><img src='/images/dots-icon.png' width='20' height='20' /></div>
        </div>
    )
}

export default TopNav;