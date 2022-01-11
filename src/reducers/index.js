import { combineReducers } from "redux";
import { getData } from "../actions";
import PageChangeReducer from "./PageChangeReducer";
import GetData from "./GetData";

const allReducers = combineReducers({
  pageNumber: PageChangeReducer,
  userData: GetData,
});

export default allReducers;
