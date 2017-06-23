import { Subject } from 'rxjs/Subject'

class Formx {

    constructor(initValue = {}) {
        this.formValue = initValue
        this.__stream$ = (new Subject())

        let handler = (current, data) => {
            let field = {}
            field[data.field] = data.value
            return {...current, ...field}
        }
        
        this.__form$ = this.__stream$.startWith(initValue).scan(handler)
        this.dispose = this.__form$.subscribe(value => this.formValue = value)
    }

    value() {
        return this.formValue
    }

    field(name) {
        return this.formValue[name]
    }

    update(field) {
        return (input) => {
            if (input != undefined) {
                this.__stream$.next({ field, value: input.target.value })
            }
        }
    }

    dispose() {
        this.dispose()
    }
}

export default Formx
