import { createSlice } from "@reduxjs/toolkit";

import React from 'react';

export const CartSlicer = createSlice({
    name: 'cart',
    initialState:{
        itemList:[],
        totalItems:0,
        showCart : false
    },
    reducers:{
        addToCart(state,action){
            const NewItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === NewItem.id);

            if (existingItem){
                existingItem.quantiy++;
                existingItem.totalPrice += NewItem.price;

            }else{
                state.itemList.push({
                    id: NewItem.id,
                    price : NewItem.price,
                    quantiy : 1,
                    totalPrice : NewItem.price,
                    name : NewItem.name,
                });
            }
            state.totalItems++;
        },
        removeFromCart(){},
        setShowcart(state){
            state.showCart = 'true';
        }
    }
});


export const cartActions = CartSlicer.actions;