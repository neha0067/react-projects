import React from 'react';
import { Form, Link } from 'react-router-dom';

function CreateAccount() {
  return (
    <div>
        <h2>Register</h2>
        <Form method='post'>
            <label>Username</label>
            <input type='text' name='username' required/>

            <label>Email</label>
            <input type='email' name='email' required/>

            <label>Password</label>
            <input type='password' name='password' required/>

            <button type='submit'>Register</button>
            <p>Already a member? <Link to='/login'>Login</Link></p>
        </Form>
    </div>
  )
}

export default CreateAccount