import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

//store is used for store value of authSlice
const store = configureStore({
    reducer:{
        auth:authSlice,
        //TODO: add more Slices in this as per you requirements

    }
})

export default store;
