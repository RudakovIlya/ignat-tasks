import {loadingReducer} from './loadingReducer'
import {combineReducers, compose, createStore} from 'redux'
import {themeReducer} from '../../hw12/bll/themeReducer'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistConfig = {
    key: 'state',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers())

export const persistor = persistStore(store)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
