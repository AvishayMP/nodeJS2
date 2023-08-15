import _ from 'lodash';

const inpText = process.argv.splice(2);
console.log(inpText);

const countersArr = Object.entries(_.countBy(inpText));
console.log(countersArr);

const sorted = countersArr.sort((a, b) => b[1] - a[1]);
console.log(sorted);