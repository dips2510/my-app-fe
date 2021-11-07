import initialState from "../reducers/initialState";
import { ACTIONS } from "../constants/actionTypes";

const accountHistoryReducer = (state=initialState.accountHistory, action) => {
    switch(action.type){
      case ACTIONS.FETCH_HISTORY:
          return state
      case ACTIONS.SUBMIT_TRANSFER:
            return [...state, action.payload];
      default:
          return state;  
    }
}

export default accountHistoryReducer;