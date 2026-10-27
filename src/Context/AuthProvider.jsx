import {createContext} from 'react'
import {getLocalStorage,setLocalStorage} from '../utils/localStorage'
import {useEffect,useState} from 'react'
export const AuthContext=createContext();
const AuthProvider = (props) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        setLocalStorage()
        const {employee,admin}=getLocalStorage()
      setUserData({admin,employee});
    
    }, [])
    
  return (
    <div>
    <AuthContext.Provider value={userData}>
        {props.children}
    </AuthContext.Provider>
    
    </div>
  )
}

export default AuthProvider