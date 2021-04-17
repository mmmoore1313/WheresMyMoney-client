import React, { useState, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
// import Header from './components/shared/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
// import Home from './components/shared/Home'

const App = props => {
  const [user, setUser, clearUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const deleteAlert = (id) => {
    setMsgAlerts([
      ...msgAlerts.filter(msg => msg.id !== id)
    ])
  }

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts([
      ...msgAlerts,
      { heading, message, variant, id }
    ])
  }

  // render (props) {
  //  const { msgAlerts, user } = this.state

  return (
    <Fragment>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}

      <div className="App">
        {props.location.state ? props.location.state.msg : null}
      </div>
      <main className="container">
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/sign-up' render={() => (
          <SignUp msgAlert={msgAlert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn msgAlert={msgAlert} setUser={setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut msgAlert={msgAlert} clearUser={() => clearUser({ user: null })} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword msgAlert={msgAlert} user={user} />
        )} />
      </main>
    </Fragment>
  )
}
// }

export default withRouter(App)
