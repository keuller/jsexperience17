import { h } from 'preact'
import { changeArtist } from 'actions'

const CharacterInfo = ({ data }) => (
    <div class="block">
        <h3>Name: {data.name}</h3>
        <img src={data.picture} border="0" width="160" />
    </div>
)

const Artist = (props) => (
    <div class="section">
        <h3 class="title is-3">Harry's Characters</h3>
        <div class="block">
            <a class="button is-info" onClick={() => changeArtist('15')}>Harry</a>
            <a class="button is-info" onClick={() => changeArtist('10')}>Hermione</a>
            <a class="button is-info" onClick={() => changeArtist('27')}>Rony</a>
            <a class="button is-info" onClick={() => changeArtist('75')}>Dumbledore</a>
            <a class="button is-info" onClick={() => changeArtist('54')}>Hagrid</a>
            &nbsp;|&nbsp;
            <a class="button is-primary" onClick={() => changeArtist('0')}>Reset</a>
        </div>
        
        {props.data.name ? <CharacterInfo data={props.data} /> : null }
    </div>
)

export default Artist
