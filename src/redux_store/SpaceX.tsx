import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePayload } from "./spacexReducer";
import { AppDispatch, RootState } from "./store";
import { getLaunches } from "./spacexThunk";

const SpaceX = () => {
  const dispatch: AppDispatch = useDispatch();
  const SpaceXStore = useSelector((state: RootState) => state.spacex);

  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  const loadPayload = () => (
    <ul>
      {SpaceXStore.payloads?.map((element) => (
        <li>{element}</li>
      ))}
    </ul>
  );
  return (
    <>
      <div>
        patch:
        <ul>
          <li>small: {SpaceXStore.links?.patch.small} </li>
          <li>large: {SpaceXStore.links?.patch.large} </li>
        </ul>
      </div>
      <div>
        reddit:
        <ul>
          <li>campaign: {SpaceXStore.links?.reddit.campaign} </li>
          <li>launch: {SpaceXStore.links?.reddit.launch} </li>
          <li>media: {SpaceXStore.links?.reddit.media} </li>
          <li>recovery: {SpaceXStore.links?.reddit.recovery} </li>
        </ul>
      </div>
      <div>
        flickr:
        <ul>
          <li>small: {SpaceXStore.links?.flickr.small} </li>
          <li>original: {SpaceXStore.links?.flickr.original} </li>
        </ul>
      </div>
      <div>press kit: {SpaceXStore.links?.pressKit}</div>
      <div>web cast: {SpaceXStore.links?.webCast}</div>
      <div>youtube id: {SpaceXStore.links?.youtube_id}</div>
      <div>article: {SpaceXStore.links?.article}</div>
      <div>wikipedia: {SpaceXStore.links?.wikipedia}</div>
      <div>
        payloads:
        {loadPayload()}
      </div>
      <Button onClick={() => dispatch(getLaunches())}>Refresh Data</Button>
      <Button
        onClick={() =>
          dispatch(changePayload(["This data has been", "Overrided manually"]))
        }
      >
        Override Data Manually
      </Button>
    </>
  );
};

export default SpaceX;
