import React from 'react';
import { Form, Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div>
      <h2>Login</h2>
      <Form>
        <label className='label label-text'>Email</label>
        <input type='email' name='identifier' className='input input-bordered'/>

        <label className='label label-text'>Password</label>
        <input type='password' name='password' className='input input-bordered'/>

        <button className='btn btn-primary btn-block'>LOGIN</button>
        <button>GUEST USER</button>
        
        <p>Not a member Yet? <Link to='/register'>Register</Link></p>
      </Form>
    </div>
  )
}

export default LoginForm