import { h } from 'preact'
import { fetchUser } from 'actions'

// PLEASE: don't do that! :-)
let alias = ''

const UserSearch = (props) => (
    <div class="block">
        <div class="field has-addons">
            <p class="control">
                <input class="input" type="text" onInput={(input) => alias = input.target.value} />
            </p>
            <p class="control">
                <a class="button is-info" onClick={() => fetchUser(alias)}>Search</a>
            </p>
        </div>
    </div>
)

export default UserSearch
