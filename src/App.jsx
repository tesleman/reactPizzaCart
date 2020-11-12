import React from "react";
import "./App.css";
import { Header } from "./components";
import { useSelector } from "react-redux";
import { selectPizza } from "./app/redusers/pizza-reduser";
import { Route } from "react-router";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";

const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые"];


function App() {
    let pizzas = useSelector(selectPizza);

    let { allPizzasItem, allPizzasItemTotal, totalPrise } = useSelector(({ allPizzasItem }) => ({
        allPizzasItem: allPizzasItem.allPizzasItem,
        allPizzasItemTotal: allPizzasItem.total,
        totalPrise: allPizzasItem.totalPrise

    }));

    return (
        <div className="wrapper">
            <Header totalPrise={totalPrise} totall={allPizzasItemTotal}/>
            <div className="content">

                <Route exact path={"/"}>
                    <Home allPizzasItem={allPizzasItem} pizzas={pizzas} categories={categories}/>
                </Route>
                <Route path={"/cart"}>
                    <Cart allPizzasItem={allPizzasItem}/>
                </Route>

            </div>
        </div>
    );
}

export default App;
