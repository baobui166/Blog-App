import { SignIn } from "@clerk/clerk-react"

function LoginPage() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignIn signInUrl='/register' />
    </div>
  )
}

export default LoginPage
