import { combineReducers } from "redux";

import users from "./users";
import count from "./count";

const rootReducer = combineReducers({ users, count });

export default rootReducer;
