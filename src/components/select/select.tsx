/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./select.scss";
import cn from "classnames";

interface SelectProps {
  placeholder: string;
  items?: any;
  created?: boolean;
  onChange?: any;
  value?: string;
  filter?: {
    authorId: null;
    created_gte: null;
    created_lte: null;
    locationId: null;
    name: null;
    _page: Number;
  };
  setFilter?: any;
}

export const Select: React.FC<SelectProps> = ({
  placeholder,
  items,
  created,
  onChange,
  value,
  filter,
  setFilter,
}) => {
  // console.log(items)

  const [isOpen, setIsOpen] = useState(false);
  const [isFirstRange, setIsFirstRange] = useState("");
  const [isLastRange, setIsLastRange] = useState("");

  const openSelect = () => {
    setIsOpen(!isOpen);
  };

  const changeItem = (el: any) => {
    onChange(el);
    setIsOpen(false);
  };

  const firstRange = (event: any) => {
    if (event.target.value) {
      setIsFirstRange(event.target.value);
      setFilter({ ...filter, created_gte: event.target.value });
    } else {
      setIsFirstRange("");
      setFilter({ ...filter, created_gte: null });
    }
  };

  const lastRange = (event: any) => {
    if (event.target.value) {
      setIsLastRange(event.target.value);
      setFilter({ ...filter, created_lte: event.target.value });
    } else {
      setIsLastRange("");
      setFilter({ ...filter, created_lte: null });
    }
  };

  return (
    <div className="select">
      <input
        className={cn(
          "select__item",
          (items || created) && isOpen && "select__item_active"
        )}
        placeholder={placeholder}
        type="text"
        onClick={openSelect}
        defaultValue={value}
      />
      {value && (
        <span className="select__item_remove" onClick={() => changeItem(null)}>
          &times;
        </span>
      )}
      <span className={cn("select__item_open", isOpen && "select__item_close")}>
        &#9650;
      </span>
      {items && isOpen && (
        <ul className="select__menuList">
          {items &&
            items.map((el: any, ind: any) => (
              <div
                key={ind}
                className="select__liBlock"
                onClick={() => changeItem(el.id)}
              >
                <li className="select__li">
                  {el.name ? el.name : el.location}
                </li>
              </div>
            ))}
        </ul>
      )}
      {created && isOpen && (
        <ul className="select__menuCreated">
          <input
            className="select__input"
            type="text"
            placeholder="from"
            value={isFirstRange}
            onChange={firstRange}
          />
          <span className="select__span">&#8212;</span>
          <input
            className="select__input"
            type="text"
            placeholder="before"
            value={isLastRange}
            onChange={lastRange}
          />
        </ul>
      )}
    </div>
  );
};
