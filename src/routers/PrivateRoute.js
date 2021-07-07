import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PrivateRoute = ({isAuth, component:Component,...rest
    }) => {
    const lastPath = rest.location.pathname + rest.location.search || rest.location.pathname
    localStorage.setItem('lastPath', lastPath);

    return (
        <Route {...rest} 
            component={(props)=>(
                (isAuth)
                    ?(<Component {...props}/>)
                    :(<Redirect to='/login' />)

                )}
            />
        )
}
PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}