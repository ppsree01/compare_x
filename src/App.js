import { useEffect, useState } from 'react';
import View from "./components/View";
import Search from './components/Search';
import SideNav from './components/SideNav';
import { MonthSet } from './constants/constants';
import './App.css';

const App = () => {
	const [month, setMonth] = useState('February');

	const [monthlyView, setMonthlyView] = useState([]);
	const [overallView, setOverallView] = useState([]);

	useEffect(() => {
		getData(month);
	}, [month]);

	const getData = (month) => fetch('data/data.json')
		.then( response => response.json() )
		.then( response => response['monthly_comparison'] )
		.then( response => {
			setMonthlyView(response[month]['CompareAB']);
			setOverallView([...response[month]['CompareAB'], ...response[month]['CompareAB']]);
		});

	const handleSearch = (searchTerm) => {
		if (!searchTerm) {
			setMonth('February');
		} else if (MonthSet.has(searchTerm)) {
			setMonth(searchTerm);
		} else {
			// text search
			let filteredMonthly = [];
			let filteredOverall = []
			for (let entry of monthlyView) {
				if (entry.indexOf(searchTerm) > - 1) {
					filteredMonthly.push(entry);
				} 
			}

			for (let entry of overallView) {
				if (entry.indexOf(searchTerm) > - 1) {
					filteredOverall.push(entry);
				} 
			}

			setMonthlyView(filteredMonthly);
			setOverallView(filteredOverall);
		}
	}

	return (
		<div className="app-body">
			<div className='app-nav'>
				<SideNav />
			</div>
			<div className='app-content'>
				<Search updateView={handleSearch}/>
				<View heading={month + ' Comparison'} items={monthlyView} />
				<View heading={'Overall Comparison'} items={overallView} />
			</div>
		</div>
	);
}

export default App;