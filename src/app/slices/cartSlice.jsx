import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addToCart(state, action){            
            const itemIndex = state.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex>= 0){
                state[itemIndex].qnty +=1;
            }
            else{
                const temp = { ...action.payload, qnty:1}
                return state = [...state, temp]
            }
            
        },
        deleteToCart(state, action){            
            return state.filter((e) => e.id !== action.payload.id);
            
        },

        decreamentItem(state, action){
            const decItem = state.findIndex((item)=> item.id===action.payload.id);
            if(state[decItem].qnty >= 1){
                state[decItem].qnty -= 1;
            }
            
        },
        deleteAllCart(state, action){
            return state=[];
        },
    }
});

export {cartSlice};
export const { addToCart, deleteToCart, decreamentItem, deleteAllCart } = cartSlice.actions;