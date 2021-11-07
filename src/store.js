import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import createStorageMiddleware, { getStorageState } from 'redux-simple-storage-middleware';

const localStorageMiddleware = createStorageMiddleware({
    key: 'myapp-account',
    type: 'sessionStorage'
})

const storageState = getStorageState({
    key: 'myapp-account',
    type: 'localStorage',
    defaultReponse: initialState
});  

const middleware = [localStorageMiddleware, thunk];

const store = createStore(
  rootReducer,
  storageState,
  compose(
    applyMiddleware(...middleware)
    )
);

export default store;