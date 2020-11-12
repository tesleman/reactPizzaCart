import React from "react";
import classNames from "classnames";
import { Button } from "./index";
import { useDispatch } from "react-redux";
import { setAllPizzaItem } from "../app/redusers/pizza-cart";

export default React.memo( function PizzaItem({ imageUrl, name, types, sizes, index, price, id, allPizzasItem }) {
    let [currentPizzaTypes, setCurrentPizzaTypes] = React.useState(types[0]);
    let [currentPizzaSizes, setCurrentPizzaSizes] = React.useState(sizes[0]);
    let pizzaTypes = ["тонкое", "традиционное"];
    let pizzaSizes = [26, 30, 40];
    let dispatch = useDispatch();

    let setPizzasCart = () => {
        let payload = {
            currentPizzaTypes,
            currentPizzaSizes,
            index,
            price,
            id,
            imageUrl,
            name
        };
        dispatch(setAllPizzaItem(payload));
    };



    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">
                {name}
            </h4>
            <div className="pizza-block__selector">
                <ul>
                    {pizzaTypes.map((m, index) => <li
                        key={m}
                        onClick={() => setCurrentPizzaTypes(index)}
                        className={classNames({
                            "disable": !types.includes(index),
                            "active": currentPizzaTypes === index

                        })}>{m}</li>)}


                </ul>
                <ul>
                    {pizzaSizes.map(m => <li key={m} onClick={() => setCurrentPizzaSizes(m)} className={classNames({
                        "disable": !sizes.includes(m),
                        "active": currentPizzaSizes === m

                    })}>{m} см.</li>)}

                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">
                    от {price} ₽
                </div>
                <Button outline add onClick={setPizzasCart}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{allPizzasItem}</i>
                </Button>
            </div>
        </div>

    );
})
