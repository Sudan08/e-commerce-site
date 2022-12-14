import { createSlice } from "@reduxjs/toolkit";


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
 
            if (!existingItem){
                state.itemList.push({
                    id: NewItem.id,
                    price : NewItem.price,
                    quantity : 1,
                    totalPrice : NewItem.price,
                    name : NewItem.name,
                    imgUrl : NewItem.imgUrl,
                });
            }
            state.totalItems +=1;
        },
        removeFromCart(state,action){
            const id = action.payload.id;
            if(id){
                state.itemList.forEach((item)=>{
                    if(item.id === id){
                        state.itemList.splice(state.itemList.indexOf(item),1);
                    }
                });
                state.totalItems -=1;
            }
            else{
                console.log("Error");
            }
        },
        setShowcart(state){
            state.showCart = 'true';
        },
        increaseQuantity(state,action){
            const id = action.payload.id;
            if(id){
                state.itemList.forEach((item)=>{
                    if(item.id === id){
                        
                        item.quantity += 1;
                        item.totalPrice = item.price * item.quantity;
                        
                    }
                });
            }
            else{
                console.log("Error");
            }
        },
        decreaseQuantity(state,action){
            const id = action.payload.id;
            if(id){
                state.itemList.forEach((item)=>{
                    if (item.id === id){
                        
                       
                        item.quantity -= 1;
                        item.totalPrice = item.quantity * item.price;
                        
                    }
                });
            }
        }
    }
});


export const cartActions = CartSlicer.actions;