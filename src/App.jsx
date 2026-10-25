import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
const App = () => {
  return (
    <div className='min-h-screen bg-[#09090f] text-white'>
      {/* <Login/> */}
      <EmployeeDashboard/>
    </div>
  )
}

export default App