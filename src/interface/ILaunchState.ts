import { Ilinks } from "./ILinks";

export interface LaunchState {
  isLoadingGetLaunch: boolean;
  launch: {
    name?: string;
    links?: Ilinks;
  } | null;
  links: Ilinks | null;
  payloads: string[];
  errorGetLaunch: any;
}
