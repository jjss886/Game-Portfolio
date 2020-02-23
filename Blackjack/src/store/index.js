import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createDeck, shuffleDeck } from "../utils/utilities";

// INITIAL STATE
const initialState = {
  deck: [],
  players: [],
  livePlayer: {},
  liveGame: false
};

// ACTION TYPES
const SET_DECK = "SET_DECK";
const ADD_PLAYER = "ADD_PLAYER";
const SET_PLAYER = "SET_PLAYER";
const SET_GAME = "SET_GAME";

// ACTION CREATORS
const setDeck = deck => {
  return {
    type: SET_DECK,
    deck
  };
};

const setPlayer = player => {
  return {
    type: ADD_PLAYER,
    player
  };
};

export const setGame = () => {
  return {
    type: SET_GAME
  };
};

// THUNKY THUNKS
export const setNewDeck = () => {
  return dispatch => {
    try {
      const deck = createDeck();
      shuffleDeck(deck);
      dispatch(setDeck(deck));
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

export const addPlayer = () => {
  return dispatch => {
    try {
      const idx = store.getState().players.length + 1,
        playerObj = {
          Name: `Player ${idx}`,
          ID: idx,
          Points: 0,
          Hand: new Array()
        };
      dispatch(setPlayer(playerObj));
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
    case ADD_PLAYER:
      return { ...state, players: [...state.players, action.player] };
    case SET_GAME:
      return { ...state, liveGame: !state.liveGame };
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
