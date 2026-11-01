import CreateTask from '../Others/CreateTask/CreateTask'
import Header from '../Others/Header/Header'
const AdminDashboard = ({setIsLoggedIn}) => {

  return (
<div className="min-h-screen bg-[#09090f]">
      <Header setIsLoggedIn={setIsLoggedIn}/>
      
      <div>
        <CreateTask />
      </div>
    </div>
  );
};


export default AdminDashboard