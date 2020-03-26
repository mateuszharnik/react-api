import { GETDATA, GETNEXTPAGE } from '../actions/App';

const initialState = {
  categories: [
    'People',
    'Planets',
    'Species',
    'Films',
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GETDATA:
      return state;
    case GETNEXTPAGE:
      return state;
    default:
      return state;
  }
}
