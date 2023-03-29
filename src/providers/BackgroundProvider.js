import React, { createContext, useContext, useReducer } from "react";
import { getRandomBackground } from "../utils/getRandomBackground";
import bgStore from "../stores/bgStore";

const INIT_STATE = {
  url: bgStore.getFavorite() ?? getRandomBackground(),
  isFavorite: !!bgStore.getFavorite(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BACKGROUND":
      return {
        url: action.payload,
        isFavorite: true,
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        isFavorite: !state.isFavorite,
      };
    case "SHUFFLE_BACKGROUND":
      return {
        url: getRandomBackground(),
        isFavorite: false,
      };
    default:
      return state;
  }
};

const BackgroundStateContext = createContext();
const BackgroundDispatchContext = createContext();

const BackgroundProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <BackgroundStateContext.Provider value={state}>
      <BackgroundDispatchContext.Provider value={dispatch}>
        {children}
      </BackgroundDispatchContext.Provider>
    </BackgroundStateContext.Provider>
  );
};

const useBackgroundState = () => {
  const context = useContext(BackgroundStateContext);
  if (!context) {
    throw new Error(
      "useBackgroundState must be used within a BackgroundProvider component"
    );
  }
  return context;
};

const useBackgroundDispatch = () => {
  const context = useContext(BackgroundDispatchContext);
  if (!context) {
    throw new Error(
      "useBackgroundDispatch must be used within a BackgroundProvider component"
    );
  }
  return context;
};

const ACTIONS = {
  SET_BACKGROUND: (url) => {
    bgStore.saveFavorite(url);
    return { type: "SET_BACKGROUND", payload: url };
  },
  TOGGLE_FAVORITE: (url) => {
    bgStore.toggleFavorite(url);
    return { type: "TOGGLE_FAVORITE" };
  },
  SHUFFLE_BACKGROUND: () => {
    bgStore.clearFavorite();
    return { type: "SHUFFLE_BACKGROUND" };
  },
};

export {
  BackgroundProvider,
  useBackgroundState,
  useBackgroundDispatch,
  ACTIONS,
};
