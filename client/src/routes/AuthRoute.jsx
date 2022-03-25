import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect ,Route} from 'react-router-dom';


const AuthRoute = (props) => {
    const { user, loading, isAuthenticated, error } = useSelector(
        (state) => state.user
      );

      if(!isAuthenticated) {
          return <Redirect to="/" />
      }
    
  return (
    <Route {...props} />
  )
}

export default AuthRoute