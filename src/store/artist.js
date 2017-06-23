import artists from 'store/data'

const artist = (state, action) => {
    switch(action.type) {
        case 'ARTIST_CHANGED': 
            return artists[action.payload]
    }
    return state
}

export default artist
