import { createSlice } from "@reduxjs/toolkit";

//var arr1 = [1, 2, [3, 4]];
// arr1.flat();
//
// //вирівняти один рівень масиву
// arr1.reduce((acc, val) => acc.concat(val), []); // [1, 2, 3, 4]
//
// //або
// const flatSingle = arr => [].concat(...arr);

const allPizzaReduce = (arr) => Object.values(arr);
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const getTotalSumPrise = (draft) => {
    let allPizzaReduceFlat = allPizzaReduce(draft.allPizzasItem).flat();
    draft.total = allPizzaReduceFlat.length;
    draft.totalPrise = getTotalPrice(allPizzaReduceFlat);
};

let draftStatePlusItem = (draft, action) => {
    draft.allPizzasItem[action.payload.id].push(action.payload);
    getTotalSumPrise(draft);
};

let initialState = {
    allPizzasItem: {},
    total: 0,
    totalPrise: 0
};


export let allPizzasItem = createSlice({
    name: "allPizzasItem",
    initialState,
    reducers: {
        setAllPizzaItem: (draft, action) => {
            if (!draft.allPizzasItem[action.payload.id]) {
                draft.allPizzasItem[action.payload.id] = [];
            }
            draftStatePlusItem(draft, action);
        },
        addPizzaCart: (draft, action) => {
            draftStatePlusItem(draft, action);
        },
        minusPizzaCart: (draft, action) => {
            draft.allPizzasItem[action.payload.id].pop();
            getTotalSumPrise(draft);
        },
        clearCart: (draft) => {
            draft.allPizzasItem = {};
            draft.total = 0;
            draft.totalPrise = 0;
        },
        removeCartItem: (draft, action) => {
            delete draft.allPizzasItem[action.payload];
        }
    }
});

export const { setAllPizzaItem, addPizzaCart, minusPizzaCart, clearCart, removeCartItem } = allPizzasItem.actions;

export const allSelectPizzasItem = state => state.allPizzasItem.allPizzasItem;
export const total = state => state.allPizzasItem.total;


export default allPizzasItem.reducer;