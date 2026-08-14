import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div mode="redirect"><SignUp/></div>
  )
}

export default SignUpPage