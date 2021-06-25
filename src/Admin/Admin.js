import React from 'react'
import {checkUserIsAdmin}  from '../Helpers/isAdmin'
import {useSelector} from 'react-redux'

const mapState = ({user}) => ({
      currentUser : user.currentUser
})

const Admin = () =>  {
      const {currentUser} = useSelector(mapState);
      const isAdmin = checkUserIsAdmin(currentUser);
      if(!isAdmin) return (<h1>U are not admin</h1>);
      return (
            <div>
               Hi I am admin page   
            </div>
      )
}

export default Admin
