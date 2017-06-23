import { h, Component } from 'preact'
import { fetchUser } from 'actions'
import { fmtDate } from 'lib/utils'

const UserInfo = ({ data, onClose }) => (
    <div class="content">
      <div>{data.name}</div>
      <div class="simple-txt">Location: {data.location}</div>
      <div class="simple-txt">Company: {data.company}</div>
      <div class="simple-txt">Public Repos: {data.public_repos}</div>
      <br />
      <div class="simple-txt">Since: {fmtDate(data.created_at)}</div>
      <br/>
      <a onClick={onClose}>Close</a>
    </div>
)

class UserCard extends Component {
    constructor() {
        super()
        this.state = { showInfo: false }
    }

    toggleInfo(e) {
        let hasDetail = (this.props.data.name != undefined)
        if (hasDetail) {
            this.setState({ showInfo: !this.state.showInfo })
        } else {
            fetchUser(this.props.data.login)
            setTimeout(() => this.setState({ showInfo: !this.state.showInfo }), 350)
        }
    }

    render({ data }, state) {
        return (
            <div class="column is-2">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img id={data.id} src={data.avatar_url} width="120" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="subtitle is-5">@{data.login}</p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <p class="card-footer-item">
                            {state.showInfo ? 
                                <UserInfo data={data} onClose={this.toggleInfo.bind(this)} /> :
                                <span><a onClick={this.toggleInfo.bind(this)}>More Info</a></span>
                            }
                        </p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default UserCard
