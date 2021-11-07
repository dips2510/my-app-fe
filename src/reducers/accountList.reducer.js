import initialState from "../reducers/initialState";
import { ACTIONS } from "../constants/actionTypes";

const accountListReducer = (state=initialState.accountList, action) => {
    switch(action.type){
      case ACTIONS.FETCH_ACCOUNT:
          return state    
      default:
          return state;  
    }
}

export default accountListReducer;