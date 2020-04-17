import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { API } from "../../services/total";
import './totals.scss';


class Totals extends Component{

    state = {
        total: {
            confirmed: "",
            recovered: "",
            critical: "",
            deaths: ""
        }
    };
    async componentDidMount() {
        const data = await API.getTotals();
        this.setState(prevState => ({
            ...prevState, total: {...prevState.total, ...data}
        }))
    }

    renderCards = (title, cases) => {
        return (
            <div className={`card-container ${title}`}>
                <span className="fold bottom" />
                <div className='card-header'>{`Total ${title} Cases`}</div>
                <div className='card-body'>
                    {cases === ""
                        ? <Loader type="TailSpin" height={30} color="blue"/>
                        : cases.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                    }
                </div>
            </div>
        )
    };
    render() {
        const {total: {confirmed, recovered, critical, deaths}} = this.state;
        return (
            <div className="total-container">
                {this.renderCards('Confirmed',confirmed)}
                {this.renderCards('Recovered', recovered)}
                {this.renderCards('Critical', critical)}
                {this.renderCards('Death', deaths)}
            </div>
        );
    }
}

export default Totals
