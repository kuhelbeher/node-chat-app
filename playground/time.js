const moment = require('moment');

// const date = new Date();
// console.log(date.getMonth());

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const createdAt = 1234;
const date = moment(createdAt);
// date.add(1, 'year').subtract(9, 'month');
// console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));
