import { combineReducers } from 'redux';
// Importa aquí todos tus reducers
import someReducer from './someReducer';

const rootReducer = combineReducers({
  // Añade aquí todos tus reducers
  someState: someReducer,
});

export default rootReducer;
