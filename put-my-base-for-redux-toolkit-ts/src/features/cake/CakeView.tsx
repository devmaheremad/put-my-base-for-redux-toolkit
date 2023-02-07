import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered as orderCake, refilled as cakesRefilled } from "./cakeSlice";

const CakeView = () => {
  const [numToRefilled, setNumToRefilled] = useState(1);
  const numberOfCakes = useAppSelector(
    ({ cake: { numberOfCakes } }) => numberOfCakes
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <h2 className="mb-10px">Number of cakes: {numberOfCakes}</h2>
      <h4 className="mb-10px">Take a cake order and get a free icecream</h4>
      <button className="mb-10px" onClick={() => dispatch(orderCake(1))}>
        Order cake
      </button>
      <div className="mb-10px">
        <label htmlFor="refilled-cakes">
          Put the amount of cake you need to refilled
        </label>
        <input
          type="number"
          name="refilled-cakes"
          id="refilled-cakes"
          onChange={(e) => setNumToRefilled(+e.target.value)}
        />
      </div>
      <button
        className="mb-10px"
        onClick={() => dispatch(cakesRefilled(+numToRefilled))}
      >
        Refilled the amount of cake
      </button>
    </>
  );
};

export default CakeView;
