import React from 'react'

export default function Form(props) {
    const {
        checkboxChange, 
        inputChange, 
        submit, 
        values, 
        disabled, 
        errors,
    } = props

const onSubmit = evt => {
    evt.preventDefault()
    submit();
}

const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
}

const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
}

return(
    <form onSubmit={onSubmit}>
        <div>
                <label>Name
                    <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Email
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                    />
                </label>

                <label>Password
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                        />
                </label>

                <label>Terms of Service
                    <input
                        checked={values.termsOfService}
                        onChange={onInputChange}
                        name='termsOfService'
                        type='checkbox'
                        />
                </label>

                <button disabled={disabled}>Submit</button> 
        </div>
    </form>
)

}