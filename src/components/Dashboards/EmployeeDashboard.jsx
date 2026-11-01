
import TaskCounts from '../Others/TaskCounts/TaskCounts'
import TaskCards from '../Others/TaskCards/TaskCards'
import Header from '../Others/Header/Header'
const EmployeeDashboard = ({setIsLoggedIn}) => {
  return (
    <div className='min-h-screen w-full'>
        <Header setIsLoggedIn={setIsLoggedIn}/>
        <TaskCounts/>
        <TaskCards/>
    </div>
  )
}

export default EmployeeDashboard