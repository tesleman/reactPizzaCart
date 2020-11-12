import React from "react";
import CartEmpty from "../CartEmpty";
import PizzaCart from "../PizzaCart";



export default function Cart({ allPizzasItem }) {


    let allPizzasItems = Object.keys(allPizzasItem).map(re => {
            return allPizzasItem[re][0];
        }
    );

    return (<>
        {allPizzasItems.length === 0  ? <CartEmpty/> : <PizzaCart allPizzasItemProps={allPizzasItem} allPizzasItemsCalk={allPizzasItems} />}
    </>);
}