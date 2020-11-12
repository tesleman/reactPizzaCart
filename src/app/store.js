import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import  pizzaSlicer  from "./redusers/pizza-reduser";
import allPizzasItem  from "./redusers/pizza-cart";

export default configureStore({
    reducer: {
        counter: counterReducer,
        pizza: pizzaSlicer,
        allPizzasItem: allPizzasItem
    }
});
