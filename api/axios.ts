import axios from 'axios';
import exp from 'constants';

const baseURL = 'https://fakestoreapi.com/';


const ax = axios.create({
    baseURL,
});


export default ax;