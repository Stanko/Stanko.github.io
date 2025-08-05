import { Fragment } from "react";
import clsx from "clsx";

const Counter = ({ className, min = 1, max = 10, name }) => {
  return (
    <div className={clsx("css-counter", className)}>
      {new Array(max - min + 1).fill(0).map((_, index) => {
        const id = `${name}-${index}`;
        const value = index + min;
        return (
          <Fragment key={index}>
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              checked={index === 0}
              onChange={() => {}} // dummy handler because React cries about it
            />
            <label htmlFor={id} key={index}>
              {value}
            </label>
          </Fragment>
        );
      })}

      <div className="css-counter__ui">
        <div className="css-counter__button css-counter__button--minus">-</div>
        <div className="css-counter__button css-counter__button--plus">+</div>
      </div>
    </div>
  );
};

export default Counter;
