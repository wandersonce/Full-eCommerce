import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderScreen(props) {
    const cart = useSelector(state => state.cart);

    const { cartItems, shipping, payment } = cart;

    if (!shipping) {
        props.history.push("/shipping")
    };

    if (!payment) {
        props.history.push("/shipping")
    };

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    };

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="placeOrder">
                <div className="placeOrder-info">
                    <div>
                        <h3>Shipping</h3>
                        <div>
                            {cart.shipping.address}, {cart.shipping.city}, {cart.shipping.postalCode}, {cart.shipping.country}
                        </div>
                        <div>
                            <h3>Payment</h3>
                            <div>
                                Payment Method: {cart.payment.paymentMethod}
                            </div>
                        </div>
                        <div>
                            <ul className="cart-list-container">
                                <li className="header-cart">
                                    <h3>Shopping Cart</h3>
                                    <div>Price</div>
                                </li>

                                {
                                    cartItems.length === 0 ?
                                        <div>
                                            Cart is empty
                        </div>
                                        :
                                        cartItems.map(item =>
                                            <li className="cart-item">
                                                <div>
                                                    <div className="cart-image">
                                                        <img src={item.image} alt="product" />
                                                    </div>
                                                    <div className="cart-name">
                                                        <div>
                                                            <Link to={"/product/" + item.product}>
                                                                {item.name}
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            Qty: {item.qty}
                                                        </div>
                                                    </div>
                                                    <div className="cart-price">${item.price}</div>
                                                </div>
                                            </li>
                                        )
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="placeOrder-action">
                    <h3>
                        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    :
                $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h3>
                    <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderScreen;