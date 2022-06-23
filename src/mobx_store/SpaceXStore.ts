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
  private _payloads?: string[];

  constructor() {
    makeAutoObservable(this);
    this.fetchData();
  }

  get links() {
    return this._links;
  }

  get payloads() {
    return this._payloads;
  }

  set payloads(value) {
    this._payloads = value;
  }

  public async fetchData() {
    const spaceXdata = await fetch(
      "https://api.spacexdata.com/v4/launches/latest"
    );
    spaceXdata.json().then((value) => {
      this._links = value.links;
      this._payloads = value.payloads;
    });
  }
}

const SpaceXStore = new SpaceXStoreClass();

export const SpaceXStoreContext =
  React.createContext<SpaceXStoreClass>(SpaceXStore);
