import { createStore, combineReducers } from 'lib/storerx'
import users from 'store/users'
import artist from 'store/artist'
import counter from 'store/counter'

// application initial state
const initState = { artist: { name:'', picture:'' }, users: {}, counter: 0 }

export default createStore(combineReducers({ counter, artist, users }), initState)
