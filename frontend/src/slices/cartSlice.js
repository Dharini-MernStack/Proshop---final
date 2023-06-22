import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';


const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item]
            }

            return updateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
            return updateCart(state);
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            return updateCart(state);
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            return updateCart(state);
        },
        clearCartItems: (state, action) => {
            state.cartItems = [];
            return updateCart(state);
        }
    },
});
export const { addToCart,
    removeFromCart,
    saveShippingAddress,
    savePaymentMethod,
    clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;

/*
//line 2-3
//Local storage will check if any items are there in cart
//if  present , it will get parsed as a js obj

//AddTo Cart reducer will take 2 things a state , the current state and an action  which will tae any data inside payload, in this case we are sending an
// to add to our cart which can be accessed as action.payload
//Calculate Item Price
  //Calculate Shipping Price (if order is over 100$ , then free , else 10$ shipping charge app)
   //Calculate Tax Price {15% tax is applicable}
//Calculate Total Price*/