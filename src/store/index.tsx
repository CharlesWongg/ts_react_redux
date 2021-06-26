import { createStore, combineReducers } from 'redux';
import { chatReducer } from './chat/reducers'

export type AppDispatch = typeof store.dispatch

const rootReducer = combineReducers({
  chat: chatReducer,
  
})
console.log('debug rootReducer', createStore(rootReducer))

export const store = createStore(
    rootReducer,
    {}
);

export type AppState = ReturnType<typeof rootReducer>