import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/config'

const Navbar = () => {
    const user =useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        auth.signOut()
        dispatch(logout())
    }
  return (
    <nav className='p-4 bg-[#9a463d] text-white flex justify-between'>
        <Link to="/">Home</Link>
        <div>
            {user ? (
                <>
                <Link to="/dashboard"> Dashboard </Link>
                <button onClick={handleLogout}>Logout</button>
                </>
            ): (
                <>
                <Link to="/login" className='mr-4'>Login</Link>
                <Link to="/signup" >Signup</Link>
                </>
            )}
        </div>
    </nav>
  )
}

export default Navbar;
