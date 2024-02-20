import { useState } from 'react';
import './Search.css';

const Search = ({ updateView }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className='search-container'>
            <input placeholder='What can we help you find?' className='search-input' value={value} onChange={handleChange} />
            <button className='search-btn' onClick={() => updateView(value)}>Search</button>
        </div>
    );
}

export default Search;