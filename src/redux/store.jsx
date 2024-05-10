// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducer/reducers';
import { thunk } from 'redux-thunk';

// ---------persist----------------------
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    todo: todoReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)


