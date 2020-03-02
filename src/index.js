import "../src/assets/main.scss";
import header from "./components/header";
import content from "./components/content";
import footer from "./components/footer";
import sidebar from "./components/sidebar";




import * as moment from 'moment'
import _ from 'lodash';

moment.locale('pt-br');


console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const getRandomNumber = () => { return Math.round(Math.random() * 100); };

const randomNumbers = _.times(8, getRandomNumber);
console.log(randomNumbers);
//Build
header();
content();
footer(); 


