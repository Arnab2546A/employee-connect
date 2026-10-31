import React from 'react'
import CreateTask from '../Others/CreateTask/CreateTask'
import Header from '../Others/Header/Header'
const AdminDashboard = () => {
  return (
<div className="min-h-screen bg-[#09090f]">
      <Header />

      <div>
        <CreateTask />
      </div>
    </div>
  );
};


export default AdminDashboard