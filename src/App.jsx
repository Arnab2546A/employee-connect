import {useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
const App = () => {
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
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App