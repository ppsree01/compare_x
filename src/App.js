import { useEffect, useReducer, useState } from 'react';
import View from "./components/View";
import Search from './components/Search';
import SideNav from './components/SideNav';
import { MonthSet } from './constants/constants';
import './App.css';
import TopNav from './components/TopNav';
import SelectBox from './components/SelectBox';

const App = () => {
	const [month, setMonth] = useState('February');
	// const [view, dispatch] = useReducer(viewReducer, { all: [], filtered: [] });

	const [monthlyView, setMonthlyView] = useState({ all: [], filtered: [] });
	const [overallView, setOverallView] = useState({ all: [], filtered: [] });

	const [productOne, setProductOne] = useState('Product A');
	const [productTwo, setProductTwo] = useState('Product B');


	useEffect(() => {
		getData(month);
	}, [month]);

	const getData = (month) => fetch('data/data.json')
		.then( response => response.json() )
		.then( response => response['monthly_comparison'] )
		.then( response => {
			setMonthlyView({all: response[month]['CompareAB'], filtered: response[month]['CompareAB'] });
			setOverallView({
				all: [...response[month]['CompareAB'], ...response[month]['CompareAB']],
				filtered: [...response[month]['CompareAB'], ...response[month]['CompareAB']]
			});
		});

	const handleSearch = (searchTerm) => {
		if (!searchTerm) {
			setMonth('February');
		} else if (MonthSet.has(searchTerm)) {
			setMonth(searchTerm);
		} else {

			let all = monthlyView.all;
			setMonthlyView({ ...monthlyView, filtered: [...all] });
			all = overallView.all;
			setOverallView({ ...overallView, filtered: [...all]});

			// text search
			let filteredMonthly = [];
			let filteredOverall = []
			for (let entry of monthlyView.filtered) {
				if (entry.indexOf(searchTerm) > - 1) {
					filteredMonthly.push(entry);
				} 
			}

			for (let entry of overallView.filtered) {
				if (entry.indexOf(searchTerm) > - 1) {
					filteredOverall.push(entry);
				} 
			}

			setMonthlyView({ ...monthlyView, filtered: filteredMonthly });
			setOverallView({ ...overallView, filtered: filteredOverall });
		}
	}

	let options = ['Product B', 'Product C', 'Product D'];
	const handleProductOneChange = (option) => {
		setProductOne(option);
	}

	const handleProductTwoChange = (option) => {
		setProductTwo(option);
	}

	return (
		<div className='parent'>
		<div className="app-body">
			<div className='app-nav'>
				<SideNav />
			</div>
			<div className='app-content'>
				<TopNav />
				<div className='app-view'>
					<div className='app-product-compare'>
						<SelectBox selected={'Product A'} options={options} updateSelection={handleProductOneChange} />
						<SelectBox selected={'Product B'} options={options} updateSelection={handleProductOneChange} />
					</div>
					<Search updateView={handleSearch}/>
					<View heading={month + ' Comparison'} items={monthlyView.filtered} />
					<View heading={'Overall Comparison'} items={overallView.filtered} />
				</div>

			</div>
		</div>
		</div>
	);
}

export default App;