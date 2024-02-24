import { createSlice } from '@reduxjs/toolkit';
import { filterByText, filterByMonthOrProduct } from '../../utils/utils';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: { 
        source: {
            monthly: [],
            overall: []
        },
        filteredMonthly: [],
        filteredOverall: [],
        month: ''
    },
    reducers: {
        filter: filterValues
    }
});

function filterValues(state, action) {
    switch(action.payload.type) {
        case 'TEXT':
            {
                let text = action.payload.text;
                let monthly = filterByText(state.source.monthly, text);
                let overall = filterByText(state.source.overall, text);
                return { ...state, filteredMonthly: monthly, filteredOverall: overall }
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
                    filteredOverall: overall,
                    month
                }
            }
        
        default:
            return { ...state };
    }
}

export const { filter } = filterSlice.actions;
	
export default filterSlice.reducer;