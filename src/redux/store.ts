import {legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";


const rootReducer = counterReducer
export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;