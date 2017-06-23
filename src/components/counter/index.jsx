import { h } from 'preact'
import { increment, decrement } from 'actions'

const Counter = (props) => {
    let classCounter = 'counter-label positive'
    if (props.value < 0) classCounter = 'counter-label negative'
    return (<div class="container">
        <br/>
        <div class="columns">
            <div class="column is-2 is-offset-5 box has-text-centered">
                <h4 class="title is-4">Counter</h4>
                <button class="button" onClick={e => increment()}>+1</button>
                <span class={classCounter}>{props.value}</span>
                <button class="button" onClick={e => decrement()}>-1</button>
            </div>
        </div>
    </div>)
}

export default Counter
