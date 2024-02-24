import { useEffect, useState } from 'react';
import View from "./components/View";
import Search from './components/Search';
import SideNav from './components/SideNav';
import { months, getCurrentMonth } from './utils/utils';
import { options } from './constants/constants';
import './App.css';
import TopNav from './components/TopNav';
import SelectBox from './components/SelectBox';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from './features/filter/filterSlice';
import Chat from './components/Chat';

const App = () => {

	const [month, setMonth] = useState(getCurrentMonth());
	const [productOne, setProductOne] = useState(options[0]);
	const [productTwo, setProductTwo] = useState(options[1]);
	const [valid, setValid] = useState(true);

	const monthly = useSelector((state) => state.filter.filteredMonthly);
	const overall = useSelector((state) => state.filter.filteredOverall);

	const dispatch = useDispatch();

	useEffect(() => {
		getData(month, productOne, productTwo);
	}, [month, productOne, productTwo]);

	const getData = (month, productOne, productTwo) => fetch('data/data.json')
		.then( response => response.json() )
		.then( response => response['monthly_comparison'] )
		.then( response => {
			dispatch(filter({
				type: 'RELOAD',
				data: response,
				month, productOne, productTwo
			}));
		});


	const handleSearch = (text) => {
		if (months.indexOf(text) > -1) {
			setMonth(text);
		} else {
			let action = {
				type: 'TEXT',
				text,
			}
			dispatch(filter(action));
		}
	}

	const handleProductOneChange = (selectedProduct) => {
		setProductOne(selectedProduct);
		if (selectedProduct == productTwo) {
			setValid(false);
		} else {
			if (!valid) {
				setValid(true);
			}
		}
	}

	const handleProductTwoChange = (selectedProduct) => {
		setProductTwo(selectedProduct);
		if (selectedProduct == productOne) {
			setValid(false);
		} else {
			if (!valid) {
				setValid(true);
			}
		}
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
						<div className='app-product-label'>
							<label>What would you like to compare today?</label>
						</div>
						<div className='app-product-compare'>
							<SelectBox selected={productOne} options={options} handleSelectionChange={handleProductOneChange} />
							<SelectBox selected={productTwo} options={options} handleSelectionChange={handleProductTwoChange} />
						</div>
						{ !valid && <div className='app-error-msg'>Choose two different products to continue</div>}
						{ valid && <div>
							<Search updateView={handleSearch}/>
							<View heading={month + ' Comparison'} items={monthly} />
							<View heading={'Overall Comparison'} items={overall} />
						</div> }
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;