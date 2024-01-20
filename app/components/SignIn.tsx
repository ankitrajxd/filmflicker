import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
    <Button variant={'outline'}>
        <SignInButton />
    </Button>
  )
}

export default SignIn