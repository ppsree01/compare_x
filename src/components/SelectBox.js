import { useState } from "react";
import './SelectBox.css';
// select box:

const SelectBox = ({ options }) => {

    const availableOptions = () => {
        let listItems = [];
        for (let i in options) {
            if (i == 0) {
                listItems.push(<option value={options[i]} selected>Product {options[i]}</option>)
            }
            listItems.push(<option value={options[i]}>Product {options[i]}</option>)
        }
        return listItems;
    }

    return (
        <select className='select-box'>
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