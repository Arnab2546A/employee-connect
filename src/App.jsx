import {useState,useContext,useEffect} from 'react'
import {AuthContext} from './Context/AuthProvider'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import {LoggedInUserContext} from './Context/LoggedInUserContext'
const App = () => {
      const d=useContext(AuthContext);
      const authData=d?d.userData:{employee:null,admin:null}
      const admin=authData?authData.admin:null;
      const employee=authData?authData.employee:null;
        console.log(admin)
        console.log(employee)
  const [user, setUser] = useState(null);
  const [loggedInUser,setLoggedInUser]=useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    if(localStorage.getItem('loggedInUser')){
    const {role,data}=JSON.parse(localStorage.getItem('loggedInUser'))
    setLoggedInUser(data);
    if(role==='Employee'){
      setUser('Employee');
    }
    else{
      setUser('Admin');
    }
    }
    else{
      setUser(null)
    }
  }, [isLoggedIn])
  
  const handleLogin=(email,password)=>{
    let emp,adm;
    if(employee){
      emp=employee.find((e)=>(e.email==email && e.password==password));
    }
    if(admin){
      adm=admin.find((e)=>(e.email==email && e.password==password));
    }
    if(adm){
      localStorage.setItem('loggedInUser',JSON.stringify({role:'Admin',data:adm}))
      setIsLoggedIn(true)
      
    }
    else if(emp){
      localStorage.setItem('loggedInUser',JSON.stringify({role:'Employee',data:emp}))
      setIsLoggedIn(true)
    }
    else{
      alert('invalid credentials');
    }
  }
  return (
    <div className='min-h-screen bg-[#09090f] text-white'>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <LoggedInUserContext.Provider value={{loggedInUser,setLoggedInUser}}>
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user === "Admin" ? (
      <AdminDashboard setIsLoggedIn={setIsLoggedIn}/>
    ) : user === "Employee" ? (
      <EmployeeDashboard setIsLoggedIn={setIsLoggedIn}/>
    ) : (
      ''
    )}
    </LoggedInUserContext.Provider>
      {/* <EmployeeDashboard/> */}
    </div>
  )
}

export default App