import './SelectBox.css';
// select box:

const SelectBox = ({ selected, options, handleSelectionChange }) => {

    const handleChange = (e) => {
        handleSelectionChange(e.target.value);
    }

    const availableOptions = () => {
        let listItems = [];
        for (let i in options) {
            listItems.push(<option key={i} value={options[i]}>Product {options[i]}</option>)
        }
        return listItems;
    }

    return (
        <select className='select-box' value={selected} onChange={handleChange}>
            {availableOptions()}            
        </select>
    )
}

export default SelectBox;