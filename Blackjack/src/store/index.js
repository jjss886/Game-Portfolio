import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createDeck } from "../utils/utilities";

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
const SET_GAME = "SET_GAME";
const NEW_GAME = "NEW_GAME";
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

export const hitCreator = (deck, players, points) => {
  return {
    type: HIT,
    deck,
    players,
    livePlayer: points >= 21 ? 1 : 0
  };
};

export const stayCreator = () => {
  return {
    type: STAY
  };
};

export const newGameCreator = players => {
  return {
    type: NEW_GAME,
    players
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

export const newGame = players => {
  return dispatch => {
    try {
      const resetPlayers = players.reduce((acm, val, idx) => {
        acm.push({
          Name: `Player ${idx + 1}`,
          ID: idx + 1,
          Points: 0,
          Hand: new Array()
        });
        return acm;
      }, []);
      dispatch(newGameCreator(resetPlayers));
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

export const addNewPlayer = () => {
  return dispatch => {
    try {
      const idx = store.getState().players.length + 1;
      dispatch(
        addPlayer({
          Name: `Player ${idx}`,
          ID: idx,
          Points: 0,
          Hand: new Array()
        })
      );
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
      dispatch(hitCreator(deck, players, players[idx].Points));
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
        players: action.players,
        livePlayer: state.livePlayer + action.livePlayer
      };
    case STAY:
      return { ...state, livePlayer: state.livePlayer + 1 };
    case NEW_GAME:
      return {
        ...state,
        deck: createDeck(),
        players: action.players,
        livePlayer: 0
      };
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
