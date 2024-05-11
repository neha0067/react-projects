import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='text-right mt-4'>
      <Link to='/login' className='mr-4'>Sign In / Guest</Link>
      <Link to='/register'>Create Account</Link>
    </div>
  )
}

export default Login