import React, {useState, useEffect} from 'react';
import './App.css';
import formSchema from './validation/formSchema'
import Forms from './Form.js/Forms'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  username: '',
}
const initialFormErrors = {
  username: '',
}
const initialPeople = []
const initialDisabled = true

export default function App() {
  const [people, setPeople] = useState(initialPeople)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)     

  const getPeople = () => {
    axios.get('https://reqres.in/api/users')
    .then(res =>{
      setPeople(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const postNewPeople = NewPeeps => {
    axios.post('https://reqres.in/api/users', NewPeeps)
    .then(res =>{
      setPeople(...people, res.data)
    })
    .catch(err =>{
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const checkboxChange = (name, checked) => {
    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }
  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    })
  }
  const submit = evt => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    }
    postNewPeople(newUser);
  }

  useEffect(() => {
    getPeople()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
      <Forms
      checkboxChange={checkboxChange}
      inputChange={inputChange}
      submit={submit}
      values={formValues}
      disabled={disabled}
      errors={formErrors}
      /> 
      </header>
    </div>
  );
}


