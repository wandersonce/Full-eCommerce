import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function CartScreen(props) {
    const productID = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, qty));
        }
    }, [])

    return (
        <div>
            Cart Screen
        </div>
    )
}

export default CartScreen;