import { makeAutoObservable } from "mobx";
import React from "react";
import { Ilinks } from "../interface/ILinks";

class SpaceXStoreClass {
  private _links?: Ilinks;
  private _payloads: string[] = [""];
  public state = "";

  constructor() {
    makeAutoObservable(this);
    var result = this.fetchData();
    console.log(result);
  }

  get links() {
    return this._links;
  }

  get payloads() {
    return this._payloads;
  }

  set payloads(value: string[]) {
    this._payloads = value;
  }

  public async fetchData() {
    try {
      const spaceXdata = await fetch(
        "https://api.spacexdata.com/v4/launches/latest"
      );
      const data = await spaceXdata.json();
      this._links = data.links;
      this._payloads = data.payloads;
      this.state = "success";
    } catch {
      this.state = "failed";
    }
  }
}

const SpaceXStore = new SpaceXStoreClass();

export const SpaceXStoreContext =
  React.createContext<SpaceXStoreClass>(SpaceXStore);
