import { Categories, Sort } from "../index";
import React from "react";
import PizzaItem from "../PizzaItem";



export default function Home({allPizzasItem, pizzas, categories }) {

    return(        <div className="content">
        <div className="container">
            <div className="content__top">
                <Categories categories={categories} />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map((item, index) => <PizzaItem  allPizzasItem={allPizzasItem[item.id] ? allPizzasItem[item.id].length : 0} key={item.id} index={index} {...item}  />)}

            </div>
        </div>
    </div>)
}