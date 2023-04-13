import { legacy_createStore as createStore} from 'redux'
import { reducer } from "../features/counter/newCounter/reducer"

// Enhancer adds in dev tools. Redux toolkit has this already baked in
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer)