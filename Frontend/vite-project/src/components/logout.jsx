import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function logout() {
    const [authUser,setAuthUser] = useAuth();
    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            toast.success("Logout Successfully");
            setTimeout(() => {
                localStorage.removeItem("Users");
            window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error",error.message);
            setTimeout(() => {
                
            }, 1000);
        }
    }
  return (
    <div>
      <button className='py-2 px-3 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}
    >
        Logout</button>
    </div>
  )
}

export default logout
