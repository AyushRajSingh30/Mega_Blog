import { createSlice } from "@reduxjs/toolkit";

//in initialState we write all state you want to store. In this we want two state status and userData;
//Basicaly useSelector is apply on initialState and useDespatch is applied on reducers 
//initialState show by default data values
const initialState = {
status:false,
userData:null,
}

const authSlice =createSlice({
   name:"auth",
   initialState,
    reducers:{
         //action hold payload mean data action hold initialstate data
         //login and logout is called action
        login:(state, action)=>{
        state.status=true;
        state.userData=action.payload.userData;

        },

        logout:(state)=>{
              state.status=false;
              state.userData=null;
        }
    }
})


export const {login, logout} = authSlice.actions;

export default authSlice.reducer;