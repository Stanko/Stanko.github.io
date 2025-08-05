import { Fragment } from "react";
import clsx from "clsx";

const InputsWithButtons = ({ className, min = 1, max = 10, name }) => {
  return (
    <div className={clsx("inputs-with-buttons", className)}>
      {new Array(max - min + 1).fill(0).map((_, index) => {
        const value = index + min;
        const id = `${name}-${value}`;
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
    </div>
  );
};

export default InputsWithButtons;
