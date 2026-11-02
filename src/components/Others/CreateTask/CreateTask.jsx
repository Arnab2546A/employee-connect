import { useState,useContext } from "react";
import { Plus, CalendarDays, ClipboardCheck, Info } from "lucide-react";
import {AuthContext} from '../../../Context/AuthProvider'
import {getLocalStorage} from '../../../utils/localStorage'
const CreateTask = () => {
  const authData = useContext(AuthContext)
  const data=authData?authData.userData:{employee:null,admin:null}
  const {setUserData}=authData?authData:{setUserData:null};
  const {employee}=data
  const [task, setTask] = useState({
    title: "",
    employee: "",
    description: "",
    priority: "High",
    dueDate: "",
    status: "New"
  });

  const assignTask=(task)=>{
    if(employee){
     const emp=employee.find((e)=>e.name===task.employee)
     if(emp){
      emp.tasks.push(task);
      emp.newTask=emp.tasks.filter((e)=>e.status==='New').length;
      // console.log(emp.tasks);
      // console.log(emp.newTask)
      localStorage.setItem('employee',JSON.stringify(employee));
      setUserData(getLocalStorage())
     }
     else{
      alert('No such employee exists')
     }
    }
    else{
      alert('No employee exists...company is bankrupted 🥲')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    assignTask(task);
    resetForm();
  };

  const resetForm = () => {
    setTask({
      title: "",
      employee: "",
      description: "",
      priority: "High",
      dueDate: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    "w-full rounded-xl border border-gray-800 bg-[#171724] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-200";

  return (
    <section className="h-[600px] w-full rounded-2xl border border-purple-500/20 bg-[#10101b] p-4 text-white shadow-2xl shadow-purple-950/10 sm:p-5 lg:p-6">
      <header className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600 shadow-lg shadow-purple-900/40">
          <Plus size={26} />
        </div>

          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            Create New Task
          </h1>
      </header>
      <div className="flex items-center">
      <form className="space-y-12 w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              Task Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Assign To <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="employee"
              value={task.employee}
              onChange={handleChange}
              placeholder="Name of Employee"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>
            Description <span className="text-red-400">*</span>
          </label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Describe the task and its requirements..."
            rows={3}
            className={`${inputClass} resize-y`}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              Priority <span className="text-red-400">*</span>
            </label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="High">🔴 High</option>
              <option value="Moderate">🟡 Moderate</option>
              <option value="Low">🟢 Low</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Due Date <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <CalendarDays
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
              />
              <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                min={new Date().toLocaleDateString("en-CA")}
                className={`${inputClass} pl-11 scheme-dark`}
                required
              />
            </div>
          </div>
        </div>

        <footer className="flex flex-col-reverse gap-3 border-t border-gray-800 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs text-gray-500">
            <Info size={16} className="shrink-0 text-purple-400" />
            Fields marked with <span className="text-red-400">*</span> are
            required.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 rounded-xl border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-800 sm:flex-none"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500 active:scale-[0.98] sm:flex-none"
            >
              <ClipboardCheck size={18} />
              Create Task
            </button>
          </div>
        </footer>
      </form>
      </div>
    </section>
  );
};

export default CreateTask;