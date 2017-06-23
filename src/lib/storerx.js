import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

// main stream
const stream$ = new BehaviorSubject({})

// dispatcher
const dispatch = (type, data) => {
    stream$.next({ type, payload: data })
    if (isStream(data)) stream$.next(data)
}

// checks if 'value' is an instance of Observable
const isStream = value => value instanceof Observable;

// ensure that each action is an Stream
const ensureStream = (action) => isStream(action) ? action : Observable.of(action)

// create application's store
export const createStore = (rootReducer, initState) => stream$.mergeMap(ensureStream).scan(rootReducer, initState)

// action creator function
export const createAction = (actionType) => (data) => dispatch(actionType, data)

// create root reducer
export const combineReducers = (reducers) => (state, action) => {
    let newState = {}
    if (!action) return state
    Object.keys(reducers).forEach(name => {
        let previous = state[name]
          , reducer = reducers[name]
        newState[name] = reducer(previous, action)
    })
    return newState
}
