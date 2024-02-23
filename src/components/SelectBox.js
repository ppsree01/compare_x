import './SelectBox.css';
// select box:

const SelectBox = ({ options, handleSelectionChange }) => {

    const handleChange = (e) => {
        handleSelectionChange(e.target.value);
    }

    const availableOptions = () => {
        let listItems = [];
        for (let i in options) {
            if (i == 0) {
                listItems.push(<option key={i} value={options[i]} defaultValue={options[i]}>Product {options[i]}</option>)
            }
            listItems.push(<option key={i} value={options[i]}>Product {options[i]}</option>)
        }
        return listItems;
    }

    return (
        <select className='select-box' onChange={handleChange}>
            {availableOptions()}            
        </select>
    )
}

// const SelectBox = ({ selected, options, updateSelection }) => {

//     return (
//         <div>
//             <div className='selectbox'>{selected}</div>
//             <div>
//                 {options.map( option => <div onClick={updateSelection(option)}>{ option } </div>)}
//             </div>
//         </div>
//     )
// }

export default SelectBox;