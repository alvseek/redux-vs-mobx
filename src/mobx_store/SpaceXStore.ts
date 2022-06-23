import { makeAutoObservable } from "mobx";
import React from "react";

export interface Ilinks {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: string;
    launch: string;
    media: string;
    recovery: string;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  pressKit: string;
  webCast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

class SpaceXStoreClass {
  private _links?: Ilinks;
  private _payload?: string[];

  constructor() {
    makeAutoObservable(this);
    this.fetchData();
  }

  get links() {
    return this._links;
  }

  get payload() {
    return this._payload;
  }

  set payload(value) {
    this._payload = value;
  }

  public async fetchData() {
    const spaceXdata = await fetch(
      "https://api.spacexdata.com/v4/launches/latest"
    );
    spaceXdata.json().then((value) => {
      this._links = value.links;
    });
  }
}

const SpaceXStore = new SpaceXStoreClass();

export const SpaceXStoreContext =
  React.createContext<SpaceXStoreClass>(SpaceXStore);
