import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const CreateAccount = lazy(() => import('../pages/CreateAccount'))
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'))
const ResetPassword = lazy(() => import('../pages/ResetPassword'))
const RegisterOtp = lazy(() => import('../pages/RegisterOtp'))
const LoginOtp = lazy(() => import('../pages/LoginOtp'))
const Profile = lazy(() => import('../pages/Profile'))
const Success = lazy(() => import('../pages/Success'))

function Auth() {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/create-account" component={CreateAccount} />
      <Route exact path="/auth/register-otp" component={RegisterOtp} />
      <Route exact path="/auth/login-otp" component={LoginOtp} />
      <Route exact path="/auth/success" component={Success} />
      <Route exact path="/auth/profile" component={Profile} />
      <Route exact path="/auth/forgot-password" component={ForgotPassword} />
      <Route exact path="/auth/reset-password" component={ResetPassword} />
      <Redirect from="/auth" to="/auth/login" />
    </Switch>
  )
}

export default Auth
