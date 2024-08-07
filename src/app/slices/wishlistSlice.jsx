import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
    name:"whishlist",
    initialState:[],
    reducers:{
        addTowishlist(state,action){
            state.push(action.payload)
        },
        deleteToWishlist(state,action){
            return state.filter((e) => e.id !== action.payload.id);
        },
        emptyWishlist(state,action){}
    }
});
export {wishlistSlice};
export const {addTowishlist,deleteToWishlist,emptyWishlist} = wishlistSlice.actions;