import React from "react";

import classNames from "classnames";

export default function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={classNames("button", {
                "button--outline": props.outline,
                "button--cart": props.cart,
                "button--add": props.add,
                "button--circle": props.circle,
                "cart__item-count-plus": props.plus,
                "cart__item-count-minus": props.minus
            })}
        >
            {props.children}
        </button>
    );
}
