import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

// INITIAL STATE
const initialState = {
  deck: [],
  players: []
};

// ACTION TYPES
const SET_MODE = "SET_MODE";
const SET_CHART_TYPE = "SET_CHART_TYPE";
const SET_LIVE_KEY = "SET_LIVE_KEY";
const SET_LIVE_DATA = "SET_LIVE_DATA";

// ACTION CREATORS
export const setMode = mode => {
  return {
    type: SET_MODE,
    mode
  };
};

export const setChartType = chartType => {
  return {
    type: SET_CHART_TYPE,
    chartType
  };
};

export const setLiveKey = key => {
  return {
    type: SET_LIVE_KEY,
    key
  };
};

// THUNKY THUNKS
export const getFullData = () => {
  return dispatch => {
    try {
    } catch (error) {
      console.error("WAH ERROR --", error);
    }
  };
};

export const addDataSet = newFullData => {
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
    case SET_MODE:
      return { ...state, mode: action.mode };
    case SET_CHART_TYPE:
      return { ...state, chartType: action.chartType };
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
