import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getLaunches } from "../../redux/thunk/spacexThunk";

const SpaceX = () => {
  const dispatch: AppDispatch = useDispatch();
  const spacexReducer = useSelector((state: RootState) => state.spacex);

  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      {spacexReducer.isLoadingGetLaunch ? "Loading" : ""}
      {spacexReducer.launch !== null && (
        <>
          name: {spacexReducer.launch.name}
          <br />
          links:
          <ul>
            {spacexReducer.launch.links?.map((item, i) => (
              <li key={`${i + 1}`}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {spacexReducer.errorGetLaunch !== null ? "error" : ""}
    </div>
  );
};

export default SpaceX;
