import { useSelector } from 'react-redux';
import './TopNav.css';
import { generateCsv } from '../utils/utils';

const TopNav = () => {

    const monthly = useSelector((state) => state.filter.filteredMonthly);
    const overall = useSelector((state) => state.filter.filteredOverall);
    const month = useSelector((state) => state.filter.month);

    const downloadReport = () => {
        const csv = generateCsv(month, monthly, overall);
        var encodeUri = encodeURI(csv);
        const link = document.createElement('a');
        link.href = encodeUri;
        link.download = "report.csv";
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