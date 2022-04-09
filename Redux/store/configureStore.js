import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../slices/navSlive'



const store = configureStore({
    reducer:{
        nav: navReducer
    }
});


export default store;