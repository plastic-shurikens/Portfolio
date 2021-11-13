import {useState} from 'react';
import './contact.scss';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/PhoneAndroid';
import Github from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import useForm from './UseForm';
import validate from './ValidateForm';

const Contact = ({setMenuOpen}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const { handleChange, handleSubmit, values, errors, form } = useForm(
    submitForm,
    validate
  );

    return (
        <div className='contact' id='contact' onClick={()=>setMenuOpen(false)}>
            <div className="form">
                <div className="elements">
                    {!isSubmitted ? (
                        <>
                         <h1>Send me a message</h1>

                        <div className='form-content'>
                        <form 
                          onSubmit={handleSubmit} 
                          className='form'
                          noValidate
                          ref={form}
                         >
                          <div className='form-inputs'>
                            <label className='form-label'>Name :</label>
                            <input
                              className='form-input'
                              type='text'
                              name='name'
                              placeholder='Enter your name'
                              value={values.username}
                              onChange={handleChange}
                            />
                            {errors.name && <p>{errors.name}</p>}
                          </div>
                          <div className='form-inputs'>
                            <label className='form-label'>Email :</label>
                            <input
                              className='form-input'
                              type='email'
                              name='email'
                              placeholder='Enter your email'
                              value={values.email}
                              onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                          </div>
                          <div className='form-inputs'>
                            <label className='form-label'>Message :</label>
                            <textarea
                              className='form-input'
                              name='message'
                              placeholder='Enter your message'
                              value={values.message}
                              onChange={handleChange} 
                            />
                            {errors.message && <p>{errors.message}</p>}
                          </div>
                
                          <button className='form-input-btn' type='submit'>
                            Submit
                          </button> 
                        
                         </form>
                         </div> 
                        </> 
                         
                    ) : (
                        <>
                            <h1>Successfully Submitted!</h1>
                            <h2>I'll get back to you as soon as possible!</h2>
                        </>
                    )}

                    <div className="icons">
                        <a href="https://www.linkedin.com/in/ismail-dahri-7a5588167/"><LinkedIn className='icon' /></a>
                        <a href="https://github.com/Plvtinum-1"><Github className='icon' /></a>
                        <Phone className='phone-icon icon' />
                        <h3>+212613499436</h3>
                        <Email className='email-icon icon' />
                        <h3>dahriiismail@gmail.com</h3>
                    </div> 
                </div>
                   
                </div>
                <div className="draw">
                    <img src="assets/contact.svg" alt="" />
                </div>
        </div>
    )
}

export default Contact
