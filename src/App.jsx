import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
const App = () => {
  return (
    <div className='min-h-screen bg-[#09090f] text-white'>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>
    </div>
  )
}

export default App