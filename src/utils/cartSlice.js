import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{

        //actions we need to write inside reducer
        addItem:(state,action)=>{

         // in older vanilla redux => its suggested that dont mutate state and returning  is mandatory
        //  const newState=[...state];
        //  newState.items.push(action.payload);
        //  return payload;

       //redux-tookit =>we have to mutate the state , redux-tookit uses immer librabry behind the scens
        //we r muttating i.e. directly modifying our state here state value is initialState value
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
       },
       clearCart:(state,action)=> {

        //either mutate the existing state or return a new state ----- 
        // retrun {items :[]};
        
        state.items.length = 0; //it will make cart empty state=[]

       }
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;