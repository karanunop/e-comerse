import React, { createContext, useState } from "react";
import all_product from '../../src/components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem)
    }

    const cartToRemove = (itemId) => {
        setItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const contextValue = { all_product, cartItem, addToCart, cartToRemove };

    return (
        <ShopContext.Provider value={all_product}>
            {props.children}
        </ShopContext.Provider>
    );
}


export default ShopContextProvider;
