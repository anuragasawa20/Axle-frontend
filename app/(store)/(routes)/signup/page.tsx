import { Button } from '@/components/ui/button'
import React from 'react'

function SignUp() {
  return (
    <div>
        <h1 className="main-heading">Sign Up</h1>
       <div>
       <input  placeholder='Full Name' type='text' name='name' required />
       <input  placeholder='User Name' type='text' name='username' required />
       <input  placeholder='Email' type='email' name='email' required />
       <input  placeholder='password' type='password' name='password' required />
       <Button variant={'landing'} type='submit'>Sign Up</Button>
       </div>
    </div>
  )
}

export default SignUp