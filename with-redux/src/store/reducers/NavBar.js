import { CLOSEMENU, TOGGLEMENU, TOGGLEDISABLED } from '../actions/NavBar';

const initialState = {
  isOpen: false,
  isDisabled: false,
  isExpanded: false,
};

export default function reducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case CLOSEMENU:
      newState = {
        ...state,
        isOpen: false,
        isExpanded: false,
      };
      return newState;
    case TOGGLEMENU:
      newState = { ...state };

      newState.isOpen = !newState.isOpen;
      newState.isExpanded = !newState.isExpanded;
      newState.isDisabled = true;

      return newState;
    case TOGGLEDISABLED:
      newState = { ...state, isDisabled: false };
      return newState;
    default:
      return state;
  }
}
