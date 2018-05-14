import moment from 'moment';

let rightNow = new Date();

const formattedTime = moment(rightNow).format("MMM Do YY"); 

export default formattedTime;