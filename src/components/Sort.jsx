import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { sortPizza } from "../app/redusers/pizza-reduser";

export default React.memo(function Sort() {
    let sortItem = ["популярности", "цене", "алфавиту"];
    let [activeItem, setActive] = React.useState("популярности");

    const [sort, setSort] = React.useState(false);


    const clickSetSort = () => {
        setSort(!sort);
    };

    const ref = React.useRef();
    const dispatch = useDispatch();
    let handleOutClick = (e) => {
        if (!e.path.includes(ref.current)) {
            setSort(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleOutClick);
    }, []);

    React.useEffect(() => {
        dispatch(sortPizza(activeItem));
    }, [activeItem]);


    return (
        <div ref={ref} className="sort">
            <div className="sort__label">
                <svg
                    transform={`rotate(${sort ? 180 : 0})`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={clickSetSort}>{activeItem}</span>
            </div>
            {sort && (
                <div className="sort__popup">
                    <ul>
                        {sortItem.map((m) => (
                            <li
                                key={m}
                                onClick={() => setActive(m)}
                                className={classNames({
                                    active: m === activeItem
                                })}
                            >
                                {m}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
