import { ACTIONS } from "../constants/actionTypes";

export const submitTransferAction = (obj) => {
    return {
      type: ACTIONS.SUBMIT_TRANSFER,
      payload: obj
    }
  };