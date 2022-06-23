import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { SpaceXStoreContext } from "./SpaceXStore";
import { Button } from "react-bootstrap";

export const MobXComponent: React.FC = () => {
  const SpaceXStore = useContext(SpaceXStoreContext);

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
      <div>payloads: {loadPayload()}</div>
      <Button onClick={() => SpaceXStore.fetchData()}>Refresh Data</Button>
      <Button
        onClick={() =>
          (SpaceXStore.payloads = ["This data has been", "Overrided manually"])
        }
      >
        Override Data Manually
      </Button>
    </>
  );
};

export default observer(MobXComponent);
