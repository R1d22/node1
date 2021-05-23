const moment = require('moment');

const now = moment();
const birthday = moment('02/10/2001', 'DD/MM/YYYY');
const years = now.diff(birthday);
const ageD = moment.duration(years);
console.log('age:', ageD.humanize());
