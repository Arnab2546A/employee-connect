import CreateTask from "../Others/CreateTask/CreateTask";
import Header from "../Others/Header/Header";
import EmployeeList from "../Others/EmployeeList/EmployeeList";

const AdminDashboard = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      <Header setIsLoggedIn={setIsLoggedIn} />

      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-stretch gap-6 px-4 py-5 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
        <CreateTask />
        <EmployeeList />
      </div>
    </div>
  );
};

export default AdminDashboard;