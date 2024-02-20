import './View.css';

// should return a heading, and a list of the comparisons obtained with icons for bugs / information
const View = ({ heading, items }) => {

    const showListItems = () => {
        let listItems = [];
        for (let i=0; i<items.length; i++) {
            listItems.push( 
                <>
                    <li className='view-listitem' key={i}> { items[i] }</li> 
                    <hr color='#ebe7e5' size='1.5' />
                </>
            );
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