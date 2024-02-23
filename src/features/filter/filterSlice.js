import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: { // this could be used to reset the text filter
        source: {
            monthly: [],
            overall: []
        },
        filteredMonthly: [],
        filteredOverall: [] 
    },
    reducers: {
        filter: filterValues
    }
});

function filterValues(state, action) {
    switch(action.payload.type) {
        case 'TEXT':
            // filter the current month and overall by text
            {
                let text = action.payload.text;
                let monthly = filterByText(state.source.monthly, text);
                let overall = filterByText(state.source.overall, text);
                return { ...state, filteredMonthly: monthly, filteredOverall: overall }
            }

        case 'MONTH':
            // reload the current month and overall for selected month
            {
                let { data, month, productOne, productTwo } = action.payload;
                let [ monthly, overall ] = filterByMonthOrProduct(data, month, productOne, productTwo);
                return { ...state, 
                    source: {
                        monthly, overall
                    },
                    filteredMonthly: monthly,
                    filteredOverall: overall
                }
            }
        case 'PRODUCT':
            // reload the current month and overall for selected product
            {
                let { data, month, productOne, productTwo, text } = action.payload;
                let [ monthly, overall ] = filterByMonthOrProduct(data, month, productOne, productTwo);
                if (!text || !text.trim()) {
                    return { ...state, 
                        source: {
                            monthly, overall
                        },
                        filteredMonthly: monthly,
                        filteredOverall: overall
                    }
                }

                monthly = filterByText(monthly, text);
                overall = filterByText(overall, text);
                return { ...state, 
                    source: { monthly, overall },
                    filteredMonthly: monthly, filteredOverall: overall
                }
            }
        
        case 'RELOAD':
            {
                let { data, month, productOne, productTwo } = action.payload;
                let [ monthly, overall ] = filterByMonthOrProduct(data, month, productOne, productTwo);
                return { ...state, 
                    source: {
                        monthly, overall
                    },
                    filteredMonthly: monthly,
                    filteredOverall: overall
                }
            }
        
        default:
            return { ...state };
    }
}

export const { filter } = filterSlice.actions;
	

function filterByText(data, text) {
    let filtered = [];
    if (!data) {
        return data;
    }
    for (let entry of data) {
        if (entry.indexOf(text) > -1) {
            filtered.push(entry);
        }
    }
    return filtered;
}

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
function filterByMonthOrProduct(data, month, productOne, productTwo) {
    // data = { "Jan": [] ... "selectedMonth": [] }
    let key = `Compare${productOne}${productTwo}`;
    if (!data[month].hasOwnProperty(key)) {
        key = `Compare${productTwo}${productOne}`;
    }

    let monthly = data[month][key];
    let overall = [];
    for (let _month of months) {
        if (_month == month) {
            break;
        }
        overall.push(...data[_month][key]);
    }

    overall.push(...data[month][key]);

    return [monthly, overall];
}

export default filterSlice.reducer;