import { createSlice } from "@reduxjs/toolkit";
export const cartslice=createSlice({
    initialState:[],
    name:"cartslice",
    reducers:{
        addtocart:(state,action)=>{
            const findproduct=state.find((product)=>product.id===action.payload.id)
            if (findproduct) {
                findproduct.quantity+=1
            } else {
                const cloneproduct={...action.payload,quantity:1}
                state.push(cloneproduct)
            }
        },
        deletefromcart:(state,action)=>{
            return state.filter((pro)=>pro.id!==action.payload.id)
        },
        clear:(state,action)=>{
            return []
        }
    }
})

export const {addtocart,deletefromcart,clear}= cartslice.actions
export default cartslice.reducer