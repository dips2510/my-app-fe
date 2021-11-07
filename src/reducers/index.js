import { combineReducers } from "redux";
import accountHistoryReducer from "./accountHistory.reducer";
import accountListReducer from "./accountList.reducer";

export default combineReducers({
    accountList: accountListReducer,
    accountHistory: accountHistoryReducer
});