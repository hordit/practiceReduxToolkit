import {createStore} from 'redux';
import {devToolsEnhancer} from '@redux-devtools/extension';
import { rootReducer } from './reducer';

// Redux state value for initial reducer,
// if the preloadedState parameter is not passed.
// Create a store extension to add developer tools

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);