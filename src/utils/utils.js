export const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

export const getData = (month, productOne, productTwo) => fetch('data/data.json')
	.then( response => response.json() )
	.then( response => response['monthly_comparison'] )
	.then( response => {

        let key = `Compare${productOne}${productTwo}`;
        if (!response[month].hasOwnProperty(key)) {
            key = `Compare${productTwo}${productOne}`;
        }

        let monthly = response[month][key];
        let overall = []

        for (let _month in months) {
            overall.append(response[_month][key]);
        }
        return [monthly, overall];

	});

export function getCurrentMonth() {
    let date = new Date();
    return months[date.getMonth()];
}

export function filterByText(data, searchTerm) {
    let filtered = [];
    for (let entry of data) {
        if (entry.indexOf(searchTerm) > -1) {
            filtered.push(entry);
        }
    }
    return filtered;
}