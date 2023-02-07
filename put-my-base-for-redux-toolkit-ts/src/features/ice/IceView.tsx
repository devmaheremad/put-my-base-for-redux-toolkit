import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered as orderIce, refilled as icesRefilled } from "./iceSlice";

const IceView = () => {
  const [numToRefilled, setNumToRefilled] = useState(1);
  const numberOfIces = useAppSelector((state) => state.ice.numberOfIces);
  const dispatch = useAppDispatch();
  return (
    <>
      <h2 className="mb-10px">Number of ices: {numberOfIces}</h2>
      <button className="mb-10px" onClick={() => dispatch(orderIce(1))}>
        Order ice
      </button>
      <div className="mb-10px">
        <label htmlFor="refilled-cakes">
          Put the amount of icecream you need to refilled
        </label>
        <input
          type="number"
          name="refilled-cakes"
          id="refilled-cakes"
          onChange={(e) => setNumToRefilled(+e.target.value)}
        />
      </div>
      <button onClick={() => dispatch(icesRefilled(+numToRefilled))}>
        Refilled the amount of ice
      </button>
    </>
  );
};

export default IceView;
