import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_tj6kae8', e.target, 'user_vUHMKjZ4XQzO01SGRy0Sb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    }, [errors, isSubmitting, callback]);

  return { handleChange, handleSubmit, values, errors, form };
};

export default useForm;