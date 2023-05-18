import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import ProtectedRoute from './components/Routes/ProtectedRoute'
import ForwardRoute from './components/Routes/ForwardRoute'

const Layout = lazy(() => import('./containers/Layout'))
const Auth = lazy(() => import('./containers/Auth'))
const Landing = lazy(() => import('./pages/Landing'))
const EmailVerification = lazy(() => import('./pages/EmailVerification'))
function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <ForwardRoute path="/auth" component={Auth} />
          {/* Place new routes over this */}
          <ProtectedRoute path="/app" component={Layout} />
          <Route exact path="/verify-email" component={EmailVerification} />
          <Route exact path="/" component={Landing} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  )
}

export default App
