import './View.css';

const View = ({ heading, items, productOne, productTwo }) => {

    const bugItem = <img src='/images/bug_icon.png' width='20' height='20' />
    const newItem = <img src='/images/new_icon.png' width='20' height='20' />

    const showListItems = () => {
        let listItems = [];
        if (!items) {
            return listItems;
        }
        for (let i=0; i<items.length; i++) {
            listItems.push( 
                <li className='view-listitem' key={'item' + i}> 
                    { items[i].indexOf(productOne) <= items[i].indexOf(productTwo) ? newItem : bugItem }
                    { items[i] }
                </li> 
            );
            if (i != items.length - 1) {
                listItems.push(
                    <hr key={'hr' + i} color='#ebe7e5' size='1.5' />
                )
            }
        }
        return listItems;
    }

    return (
        <section className='view-container'>
            <h2 className='view-title'>{ heading }</h2>
            <ul className='list-item'>
                {showListItems()}
            </ul>
        </section>
    )
}

export default View;