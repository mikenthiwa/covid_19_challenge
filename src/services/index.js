import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();



export const RapidAPI = axios.create({
    baseURL: "https://covid-19-data.p.rapidapi.com",
    headers: {
        "x-rapidapi-host": process.env.REACT_APP_RAPID_HOST_KEY,
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
    }
});
