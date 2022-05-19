/* eslint-disable default-case */
import { useReducer } from "react";

import {
  UPDATE_TRAILERS,
  UPDATE_FILTERS,
  UPDATE_CURRENT_FILTER,
  UPDATE_DISPLAY_TRAILERS,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TRAILERS:
      return {
        ...state,
        books: [...action.trailers],
        displayBooks: [...action.displayTrailers],
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: [...action.filters],
      };
    case UPDATE_CURRENT_FILTER:
      return {
        ...state,
        currentFilter: action.currentFilter,
      };

    case UPDATE_DISPLAY_TRAILERS:
      return {
        ...state,
        displayTrailers: [...action.displayTrailers],
      };
  }
};

export function useTrailerReducer(initialState) {
    return useReducer(reducer, initialState);
}
