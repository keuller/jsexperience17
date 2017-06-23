import 'whatwg-fetch'
import 'index.css'

import { h, render } from 'preact'
import App from 'components/app'
import store from 'store'

document.addEventListener('DOMContentLoaded', (e) => {
    let root = null
    store.subscribe(state => {
        root = render(<App {...state} />, document.querySelector('#app'), root) 
    })
})
