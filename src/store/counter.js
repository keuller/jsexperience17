
function counter(state, action) {
    switch(action.type) {
        case 'Counter.Increment':
            return state + 1
        case 'Counter.Decrement':
            return state - 1
    }
    return state
}

export default counter
