import { RapidAPI } from './index';

export class API {
    static async getTotals() {
        try {
            const { data } = await RapidAPI.get('/totals');
            return {...data[0]}
        } catch (e) {
            return e.response
        }
    }
    static async getCountries() {
        try {
            const { data } = await RapidAPI.get('/country/all');
            return data
        } catch (e) {
            return e.response
        }
    }
}
