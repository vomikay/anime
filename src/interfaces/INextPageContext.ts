import { NextPageContext } from "next";
import { IStore } from "../redux/interfaces/IStore";

export interface INextPageContext extends NextPageContext {
  store: IStore;
}
