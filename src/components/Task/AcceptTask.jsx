import { CalendarDays } from "lucide-react";
import {useContext} from 'react';
import {AuthContext} from '../../Context/AuthProvider'
import {LoggedInUserContext} from '../../Context/LoggedInUserContext'
import {getLocalStorage} from '../../utils/localStorage'
const AcceptTask = ({ task }) => {
  const priorityStyles = {
    High: "bg-red-500/15 text-red-400 border-red-500/30",
    Moderate: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    Low: "bg-green-500/15 text-green-400 border-green-500/30",
  };

  const {loggedInUser,setLoggedInUser}=useContext(LoggedInUserContext)
  const {userData,setUserData}=useContext(AuthContext)
  const {employee}=userData;
  const loggedInData=loggedInUser;
  const emp=employee.find((e)=>e.name===loggedInUser.name);
      const handleClick=(e)=>{
        console.log('Complete is clicked')
        const firstStorageUpdate=emp.tasks.find((e)=>e.id===task.id)
        const secondStorageUpdate=loggedInData.tasks.find((e)=>e.id===task.id)
        firstStorageUpdate.status=e
        secondStorageUpdate.status=e
        localStorage.setItem('employee',JSON.stringify(employee));
        localStorage.setItem('loggedInUser',JSON.stringify({role:'Employee',data:loggedInData}));
        setUserData(getLocalStorage())
        setLoggedInUser(JSON.parse(localStorage.getItem('loggedInUser')).data);
      }
  return (
    <div
      key={task.id}
      className="w-72 shrink-0 rounded-2xl border border-gray-800 bg-[#111118] p-5 transition duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-950/20"
    >
      <div className="mb-5">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
          Accepted Task
        </span>
      </div>

      <div className="mb-6 flex items-center justify-between gap-3">
        <span
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
            priorityStyles[task.priority]
          }`}
        >
          {task.priority}
        </span>

        <span className="flex items-center gap-1.5 whitespace-nowrap text-xs text-gray-400">
          <CalendarDays size={14} />
          {task.dueDate}
        </span>
      </div>

      <h3 className="mb-3 text-lg font-semibold text-white">
        {task.title}
      </h3>

      <p className="mb-6 text-sm leading-6 text-gray-400">
        {task.description}
      </p>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => handleClick('Completed')}
          className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-500 focus:outline-none"
        >
          Mark as Completed
        </button>

        <button
          type="button"
          onClick={() => handleClick('Failed')}
          className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-500 focus:outline-none"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;