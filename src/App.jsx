import {useState,useContext} from 'react'
import {AuthContext} from './Context/AuthProvider'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
const App = () => {
      const authData=useContext(AuthContext);
      const admin=authData?authData.admin:null;
      const employee=authData?authData.employee:null;
        console.log(admin)
        console.log(employee)
  const [user, setUser] = useState(null);
  const handleLogin=(email,password)=>{
    if(email=='admin@me.in' && password=='123'){
      setUser('Admin');
    }
    else if(email=='employee@me.in' && password=='123'){
      console.log('this is employee');
      setUser("employee");
    }
    else{
      alert('invalid credentials');
    }
  }
  return (
    <div className='min-h-screen bg-[#09090f] text-white'>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='Admin'?<AdminDashboard/>:<EmployeeDashboard/>}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App