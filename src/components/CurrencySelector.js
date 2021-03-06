import React, { Component } from 'react';

//Images
import dollarSign from '../assets/images/dollar-sign.png';
import chevron from '../assets/images/line-angle-down.svg';

//Apollo GraphQL
import { Query } from '@apollo/react-components';
import { GET_CURRENCY } from '../graphql/queries';

export default class CurrencySelector extends Component {
    render() {
        return (
            <Query query={ GET_CURRENCY }>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Err</p>;

                        return (
                            <div>
                                <div 
                                    className="currencySelector" 
                                    onClick={() => { 
                                        this.props.handleCurrency(!this.props.click)
                                        this.props.overlayChange(false)
                                        }
                                    }
                                > 
                                    <img className="dollarSign" src={dollarSign} alt="chevron" />
                                    <img id="currencySelector" src={chevron} alt="chevron" />
                                </div>

                                {/*Use same function that returns currency symbol here*/}
                                <ul 
                                    className={this.props.click ? "dropdownMenu show" : "dropdownMenu"}
                                >
                                    {
                                        data.currencies.map((currency, index) => (
                                            <li 
                                            key={index} 
                                            onClick={() => {
                                                this.props.handleCurrency(false)
                                                this.props.selectCurrency(currency)
                                            }}
                                            >{this.props.returnSymbol(currency)} {currency}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                }
            </Query>
        )
    }
}