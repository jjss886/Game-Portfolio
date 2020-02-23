import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createDeck, shuffleDeck } from "../utils/utilities";

// INITIAL STATE
const initialState = {
  deck: [],
  players: [],
  livePlayer: -1,
  liveGame: false
};

// ACTION TYPES
const SET_DECK = "SET_DECK";
const ADD_PLAYER = "ADD_PLAYER";
const SET_PLAYER = "SET_PLAYER";
const SET_GAME = "SET_GAME";
const RESET = "RESET";
const HIT = "HIT";
const STAY = "STAY";

// ACTION CREATORS
const setDeck = deck => {
  return {
    type: SET_DECK,
    deck
  };
};

const addPlayer = player => {
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

export const reset = () => {
  return {
    type: RESET
  };
};

const hitCreator = (deck, players) => {
  return {
    type: HIT,
    deck,
    players
  };
};

export const stayCreator = () => {
  return {
    type: STAY
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

export const addNewPlayer = () => {
  return dispatch => {
    try {
      const idx = store.getState().players.length + 1,
        playerObj = {
          Name: `Player ${idx}`,
          ID: idx,
          Points: 0,
          Hand: new Array()
        };
      dispatch(addPlayer(playerObj));
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

export const hitAction = (deck, idx, players) => {
  return dispatch => {
    try {
      const card = deck.pop();
      players[idx].Hand.push(card);
      players[idx].Points += card.Weight;
      dispatch(hitCreator(deck, players));
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
      return {
        ...state,
        liveGame: !state.liveGame,
        livePlayer: 0
      };
    case HIT:
      return {
        ...state,
        deck: action.deck,
        players: action.players
      };
    case STAY:
      return { ...state, livePlayer: state.livePlayer + 1 };
    case RESET:
      return initialState;
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
