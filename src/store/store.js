import { configureStore } from '@reduxjs/toolkit';
import iconReducer from './iconSlice';

const store = configureStore({
    reducer: {
        icon: iconReducer
    },
});

export default store;
