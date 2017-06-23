import { h } from 'preact'
import { fetchUsers, clearUsers } from 'actions'
import UserCard from 'components/example3/userCard'
import UserSearch from 'components/example3/userSearch'

const UserList = ({ data }) => (
    <div class="section">
        <h3 class="title is-3">Github Users</h3>
        <div>
            <UserSearch />
            <div class="block">
                <a class="button is-info" onClick={() => fetchUsers()}>Load 5</a>
                <a class="button is-info" onClick={() => clearUsers()} disabled={Object.keys(data).length < 1}>Clear</a>
                <span class="select">
                    <select onChange={(ev) => fetchUsers(ev.target.value)}>
                        <option value="5">Max. 05</option>
                        <option value="10">Max. 10</option>
                        <option value="15">Max. 15</option>
                        <option value="20">Max. 20</option>
                        <option value="25">Max. 25</option>
                    </select>
                </span>
            </div>
            <div class="columns is-multiline is-desktop">
                {Object.keys(data).map(id => <UserCard key={id} data={data[id]} />)}
            </div>
        </div>
    </div>
)

export default UserList
