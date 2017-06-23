import { h } from 'preact'
import { Router } from 'preact-router'
import AppBar from 'components/appbar'
import Links from 'components/links'
import Counter from 'components/counter'
import Artist from 'components/example1/artist'
import ContactForm from 'components/example2/contactForm'
import UserList from 'components/example3/users'
import Timer from 'components/timer'

const App = (props) => (
    <div>
        <AppBar />
        <Links />
        <Router>
            <Counter value={props.counter} path="/" />
            <Timer path='/timer' />
            <Artist path="/artist" data={props.artist || ''} />
            <ContactForm path="/contact" />
            <UserList path="/users" data={props.users || {}} /> 
        </Router>
    </div>
)

export default App
