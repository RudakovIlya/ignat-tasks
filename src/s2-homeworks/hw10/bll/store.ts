import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from 'redux'
import {themeReducer} from '../../hw12/bll/themeReducer'
import {restoreState, saveState} from "../../hw06/localStorage/localStorage";
import throttle from "lodash/throttle";

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

const configureStore = () => {

    const persistedState = restoreState<any>('state', reducers);

    const store = createStore(reducers, persistedState)

    store.subscribe(throttle(() => {
        saveState('state', {
            loading: store.getState().loading,
            theme: store.getState().theme,
        })
    }, 1000))
    return store
}

const store = configureStore()

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
