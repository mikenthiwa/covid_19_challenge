import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import {API} from "../../services/total";
import './countries.scss'

class Countries extends Component {

    state = {
        countries: []
    };

    async componentDidMount() {
        const countries = await API.getCountries();
        this.setState({countries})
    }

    renderTableHeader = () => {
        const headerDetails = ["Country", "Confirmed", "Recovered", "Critical", "Deaths"];
        return headerDetails.map((header, index) => (
            <div className={`${header}`} key={index}>{header}</div>
        ))
    };

    renderTableData = () => {
        const { countries } = this.state;
        if(countries !== undefined && countries.length > 0) {
            return countries.map((country, index) => {
                const { country: Country, confirmed, recovered, critical, deaths} = country;
                return (
                    <div className="table-data">
                        <div className='Country'>{ Country }</div>
                        <div className='Confirmed'>{ confirmed }</div>
                        <div className='Recovered'>{ recovered }</div>
                        <div className='Critical'>{ critical }</div>
                        <div className='Deaths'>{ deaths }</div>
                    </div>
                )
            });
        }
        return <Loader className="loader" type="BallTriangle" height={50} color="blue"/>
    };

    render() {
        return (
            <div className="countries-table-container">
                <div className="countries-table-title">
                    Worldwide covid-19 stats
                </div>
                <div className="table-container">
                    <div className="table-header">{this.renderTableHeader()}</div>
                    <div className="table-body">{this.renderTableData()}</div>
                </div>
            </div>
        );
    }
}

export default Countries
