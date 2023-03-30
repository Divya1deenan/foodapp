import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { getTotals } from '../../features/cartSlice';


// store.dispatch(getTotals())
//  store.dispatch(getTotals())



export default configureStore({ reducer: { cart: cartSlice } })