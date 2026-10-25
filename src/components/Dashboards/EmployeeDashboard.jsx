import React from 'react'
import TaskCounts from '../Others/TaskCounts/TaskCounts'
const EmployeeDashboard = () => {
  return (
    <div className='min-h-screen px-4 py-8'>
        <h1 className="mb-8 text-3xl font-bold text-white text-center md:text-4xl">
  Employee Dashboard
</h1>
        <TaskCounts/>
    </div>
  )
}

export default EmployeeDashboard