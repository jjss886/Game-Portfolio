import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createDeck } from "../utils/utilities";

// INITIAL STATE
const initialState = {
  deck: [],
  players: []
};

// ACTION TYPES
const SET_DECK = "SET_DECK";

// ACTION CREATORS
const setDeck = deck => {
  return {
    type: SET_DECK,
    deck
  };
};

// THUNKY THUNKS
export const setNewDeck = () => {
  return dispatch => {
    try {
      dispatch(setDeck(createDeck()));
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DECK:
      return { ...state, deck: action.deck };
    default:
      return state;
  }
};

const middleware = composeWithDevTools(
  // applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer, middleware);

export default store;
