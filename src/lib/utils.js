import { Observable } from 'rxjs/Observable';

export const get = (url) => Observable.fromPromise(fetch(url))
    .catch(err => Observable.of({ fail: true, reason: err }))
    .mergeMap(resp => {
        // fetch API don't handle 404 as an error
        if (!resp.ok) return Observable.of({ fail: true, reason: 'Not Found' })
        return Observable.fromPromise(resp.json()) 
    })

export const fmtDate = (value) => {
    let dt = new Date(value)
      , date = (dt.getDate() < 10) ? `0${dt.getDate()}` : dt.getDate()
      , monthVal = dt.getMonth() + 1
      , month = (monthVal < 10) ? `0${monthVal}` : monthVal
    return `${date}/${month}/${dt.getFullYear()}`
}
