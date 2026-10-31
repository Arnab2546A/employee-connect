
import TaskCounts from '../Others/TaskCounts/TaskCounts'
import TaskCards from '../Others/TaskCards/TaskCards'
import Header from '../Others/Header/Header'
const EmployeeDashboard = () => {
  return (
    <div className='min-h-screen w-full'>
        <Header/>
        <TaskCounts/>
        <TaskCards/>
    </div>
  )
}

export default EmployeeDashboard