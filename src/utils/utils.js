export const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

export function getCurrentMonth() {
    let date = new Date();
    return months[date.getMonth()];
}

export function randomize() {
    return Math.floor(Math.random() * 10); 
}
