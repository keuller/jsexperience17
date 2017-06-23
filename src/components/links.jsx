import { h } from 'preact'
import { Link } from 'preact-router'

const Links = (props) => (
    <div class="has-text-centered">
        <br/>
        [ 
            <Link href="/">Counter</Link>&nbsp;|&nbsp;
            <Link href="/timer">Timer</Link>&nbsp;|&nbsp;
            <Link href="/artist">Artist</Link>&nbsp;|&nbsp;
            <Link href="/contact">Contact</Link>&nbsp;|&nbsp;
            <Link href="/users">Users</Link>
        ]
        <p>&nbsp;</p>
    </div>
)

export default Links
