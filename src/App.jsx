import {useState,useContext} from 'react'
import {AuthContext} from './Context/AuthProvider'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import {LoggedInUserContext} from './Context/LoggedInUserContext'
const App = () => {
      const authData=useContext(AuthContext);
      const admin=authData?authData.admin:null;
      const employee=authData?authData.employee:null;
        console.log(admin)
        console.log(employee)
  const [user, setUser] = useState(null);
  const [loggedInUser,setLoggedInUser]=useState(null);
  const handleLogin=(email,password)=>{
    let emp,adm;
    if(employee){
      emp=employee.find((e)=>(e.email==email && e.password==password));
    }
    if(admin){
      adm=admin.find((e)=>(e.email==email && e.password==password));
    }
    if(adm){
      localStorage.setItem('loggedInUser',JSON.stringify({role:'Admin'}))
      setLoggedInUser(adm);
      setUser('Admin');
    }
    else if(emp){
      localStorage.setItem('loggedInUser',JSON.stringify({role:'Employee'}))
      setLoggedInUser(emp);
      setUser("Employee");
      
    }
    else{
      alert('invalid credentials');
    }
  }
  return (
    <div className='min-h-screen bg-[#09090f] text-white'>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <LoggedInUserContext.Provider value={loggedInUser}>
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user === "Admin" ? (
      <AdminDashboard />
    ) : user === "Employee" ? (
      <EmployeeDashboard />
    ) : (
      ''
    )}
    </LoggedInUserContext.Provider>
      {/* <EmployeeDashboard/> */}
    </div>
  )
}

export default App