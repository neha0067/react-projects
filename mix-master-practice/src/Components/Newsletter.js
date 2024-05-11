import React from 'react'

function Newsletter() {
  return (
    <div>
        <h3>Our Newsletter</h3>
        <form>
            <label>First Name</label>
            <input type='text' required/>

            <label>Last Name</label>
            <input type='text' required/>

            <label>Email</label>
            <input type='email' required/>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Newsletter