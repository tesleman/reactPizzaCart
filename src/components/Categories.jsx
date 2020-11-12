import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { filterPizza } from "../app/redusers/pizza-reduser";

export default React.memo(function Categories(props) {
    let [activeItem, setActive] = React.useState("Все");

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(filterPizza(activeItem));
    }, [activeItem]);

    return (
        <div className="categories">
            <ul>
                {props.categories.map((m) => (
                    <li
                        key={m}
                        onClick={() => setActive(m)}
                        className={classNames({ "active": m === activeItem })}
                    >
                        {m}
                    </li>
                ))}
            </ul>
        </div>
    );
});
