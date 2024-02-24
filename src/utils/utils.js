export const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

export function getCurrentMonth() {
    let date = new Date();
    return months[date.getMonth()];
}

export function filterByText(data, text) {
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

export function filterByMonthOrProduct(data, month, productOne, productTwo) {
    if (productOne == productTwo) {
        return [[], []]
    }

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