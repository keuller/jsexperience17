
const normalize = (list) => {
    return list.reduce((prev, next) => {
        let prop = "" + next.id
        prev[prop] = next
        return prev
    }, {})
}

const replace = (users, user) => {
    if (Object.keys(user).length == 0) return {...users}
    users[user.id] = user
    return {...users}
}

const users = (state, action) => {
    switch(action.type) {
        case 'USERS_CLEAN':
        case 'USERS_LOADING':
            return {}
        case 'USERS_LOADED':
            return normalize(action.payload)
        case 'User.Loaded': 
            return replace(state, action.payload)
    }
    return state
}

export default users
