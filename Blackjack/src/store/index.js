import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createDeck } from "../utils/utilities";

// INITIAL STATE
const initialState = {
  deck: [],
  house: [],
  players: [],
  livePlayer: -1,
  liveGame: false
};

// ACTION TYPES
const SET_DECK = "SET_DECK";
const ADD_PLAYER = "ADD_PLAYER";
const SET_GAME = "SET_GAME";
const NEW_ROUND = "NEW_ROUND";
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

const startGame = (deck, house) => {
  return {
    type: SET_GAME,
    deck,
    house
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const hitCreator = (deck, players, points, livePlayer) => {
  return {
    type: HIT,
    deck,
    players,
    livePlayer
  };
};

export const stayCreator = () => {
  return {
    type: STAY
  };
};

export const newRoundCreator = (players, deck, house) => {
  return {
    type: NEW_ROUND,
    players,
    deck,
    house
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

export const startNewGame = () => {
  return dispatch => {
    try {
      const deck = createDeck(),
        cardOne = deck.pop(),
        cardTwo = deck.pop(),
        house = [cardOne, cardTwo];
      dispatch(startGame(deck, house));
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

export const newRound = players => {
  return dispatch => {
    try {
      const resetPlayers = players.reduce((acm, val, idx) => {
          acm.push({
            Name: `Player ${idx + 1}`,
            ID: idx + 1,
            Points: 0,
            Cash: val.Cash,
            Hand: new Array()
          });
          return acm;
        }, []),
        deck = createDeck(),
        cardOne = deck.pop(),
        cardTwo = deck.pop(),
        house = [cardOne, cardTwo];
      dispatch(newRoundCreator(resetPlayers, deck, house));
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
          Cash: 100,
          Hand: new Array()
        })
      );
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

export const hitAction = (deck, idx, players, nextPlayer) => {
  return dispatch => {
    try {
      const card = deck.pop(),
        newPoints = players[idx].Points + card.Weight;

      players[idx].Hand.push(card);
      players[idx].Points = newPoints;
      if (newPoints > 21) players[idx].Cash -= 10;

      dispatch(hitCreator(deck, players, newPoints, nextPlayer));
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

export const houseCardDraw = () => {
  return dispatch => {
    try {
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
        deck: action.deck,
        house: action.house,
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
    case NEW_ROUND:
      return {
        ...state,
        deck: action.deck,
        house: action.house,
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
