import React, { Component } from 'react'
//SCSS
import '../style/shopping_cart.scss';
//React Components
import ImageSlider from '../components/ImageSlider';

export default class ShoppingCart extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <main className="container">
                <h1 className="heading">CART</h1>

                {
                    this.props.shoppingCart.length > 0
                    ?
                    this.props.shoppingCart.map((item) => (
                        <div className="pageCartItem">
                            <div>
                                <div className="cartPageText">
                                    <h5>{item.brand}</h5>
                                    <h5>{item.name}</h5>
                                </div>

                                <div className="cartPagePrice">
                                    <h5>
                                        {this.props.returnSymbol(item.prices[this.props.currencyIndex].currency)} 
                                        {item.prices[this.props.currencyIndex].amount}
                                    </h5>
                                </div>
                                
                                <div className="attributesBlock productTextBlock">
                                    {
                                        item.attributes.map((attributes, index) => {
                                            return (
                                                <div key={index}>
                                                    <h5 className="robotoText">{attributes.name.toUpperCase()}:</h5>
                                                    <div className="attributesBlockSquares">
                                                        {
                                                            this.props.returnAttributes(item.id, attributes.items, attributes.name)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div>
                                <div className="pageCartImageQty">
                                    <div className="qtyButtons">
                                        <button onClick={() => this.props.INCREMENT_CART(item)}>+</button>
                                        <h6>{item.qty}</h6>
                                        <button onClick={() => this.props.DECREMENT_CART(item)}>-</button>
                                    </div>

                                    <div className="sliderAndButton">
                                        <ImageSlider images={item.gallery}/>
                                        <button
                                            onClick={() => this.props.REMOVE_FROM_CART(item)}
                                        >Remove From Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <h1>No Cart Items</h1>
                }
            </main>
        )
    }
}