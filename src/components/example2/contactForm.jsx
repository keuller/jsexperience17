import { h, Component } from 'preact'
import Formx from 'lib/formx'
import FieldForm from 'components/example2/fieldForm'

class ContactForm extends Component {
    constructor() {
        super()
        this.form = new Formx({ name:'', email: '' })
    }

    onSave(e) {
        e.preventDefault()
        let { name, email, category } = this.form.value()
        alert('Name: '+ name + ' Email: ' + email + ', Category: ' + category)
    }

    render(props) {
        return (
            <div class="section">
                <h3 class="title is-3">Contact Form</h3>
                <form id="contactForm" action="#">
                    <FieldForm label="Name">
                        <input class="input" type="text" 
                                onInput={this.form.update('name')} 
                                value={this.form.field('name')} name="name" />
                    </FieldForm>

                    <FieldForm label="E-mail">
                        <input class="input" type="email" 
                            onInput={this.form.update('email')} 
                            value={this.form.field('email')} name="email" />
                    </FieldForm>

                    <FieldForm label="Category">
                        <span class="select">
                            <select onChange={this.form.update('category')}>
                                <option value="">Select a category</option>
                                <option value="F1">Friends</option>
                                <option value="F2">Family</option>
                                <option value="O1">Others</option>
                            </select>
                        </span>
                    </FieldForm>

                    <div class="field is-grouped">
                        <p class="control">
                            <button type="button" class="button is-primary" onClick={this.onSave.bind(this)}>Save</button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm
