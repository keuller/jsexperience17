import { h, Component } from 'preact'
import { Observable } from 'rxjs/Observable'

class Timer extends Component {

    constructor() {
        super()
        this.state = { started: false, value: 0 }
        this.timer$ = null
    }

    doStart() {
        this.timer$ = Observable.interval(1000)
            .takeWhile(val => { return this.state.started })
            .map(val => val + 1)
            .subscribe(value => this.setState({ value }))
    }

    clickHandler(evt) {
        evt.stopPropagation()
        if (!this.state.started)
            this.doStart()        
        else
            this.timer$.unsubscribe()
        this.setState({ started: !this.state.started })
    }

    render() {
        return h('div', null, [
            h('main', { class:'container'}, [
                h('br', null),
                h('br', null),
                h('div', { class:'columns' }, [
                    h('div', { class:'column is-2 is-offset-5 box has-text-centered' }, [
                        h('h3', { class:'title is-3' }, 'Timer'),
                        h('h4', { class:'title is-4' }, `${this.state.value}s`),
                        h('button', { class:'button is-info', onClick: this.clickHandler.bind(this) }, (!this.state.started ? 'Start' : 'Stop'))
                    ])
                ])
            ])
        ])
    }
}

export default Timer
