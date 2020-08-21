import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must be at least 3 characters long.')
      .required('Username is Required'),
    email: yup
      .string()
      .min('Must be a valid email address.')
      .required('Must include email address.'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters long.')
      .required('Password is Required'),
    termsOfService: yup
      .boolean()
      .oneOf([true], 'Please check the box.')
      .required('TOS required.'),
  });

  export default formSchema