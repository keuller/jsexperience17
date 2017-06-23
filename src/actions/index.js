import { createAction } from 'lib/storerx'
import { get } from 'lib/utils'

export const increment = createAction('Counter.Increment')
export const decrement = createAction('Counter.Decrement')

export const changeArtist = createAction('ARTIST_CHANGED')

export const clearUsers = createAction('USERS_CLEAN')

const loadingUsers = createAction('USERS_LOADING')
const usersLoaded = createAction('USERS_LOADED')

const loadingUser = createAction('User.Loading')
const userLoaded = createAction('User.Loaded')

export const fetchUsers = (value) => {
    if (!value) value = '5'
    loadingUsers(get(`https://api.github.com/users?per_page=${value}`)
        .map(users => usersLoaded(users))
    )
}

export const fetchUser = (alias) => {
    if (!alias) return
    loadingUser(get(`https://api.github.com/users/${alias}`)
        .map(user => (user.fail ? userLoaded({}) : userLoaded(user)))
    )
}
