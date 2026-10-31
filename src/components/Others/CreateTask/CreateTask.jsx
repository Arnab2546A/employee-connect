import { useState } from "react";
import {
  Plus,
  CalendarDays,
  ClipboardCheck,
  Info,

} from "lucide-react";
const CreateTask = () => {
    const [task, setTask] = useState({
        title:"",
        employee:"",
        description:"",
        priority:"High",
        dueDate:"",
        })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(task);
        resetForm();
    }

    const resetForm=()=>{
        setTask({
        title:"",
        employee:"",
        description:"",
        priority:"High",
        dueDate:"",
        })
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setTask(prev=>({ ...prev,[name]:value}));
    }
    const inputClass =
    "w-full rounded-xl border border-gray-800 bg-[#171724] px-4 py-3.5 text-sm text-white outline-none transition duration-200 placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-200";
  return (
    <div className=" px-4 py-4 text-white sm:p-6 sm:py-5 lg:px-8 lg:py-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-purple-500/20 bg-[#10101b] p-4 shadow-2xl shadow-purple-950/10 sm:p-6 lg:p-7">

        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-600 shadow-lg shadow-purple-900/40">
            <Plus size={30} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Create New Task
            </h1>
            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              Fill in the details below to create and assign a new task.
            </p>
          </div>
        </div>

        <form  className="space-y-5" onSubmit={(e)=>{handleSubmit(e)}}>

          {/* Title and Employee */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                name="employee"
                value={task.employee}
                onChange={handleChange}
                className={inputClass}
                required
                placeholder='Name of Employee'
              />
                
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={labelClass}>
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Describe the task and its requirements..."
              rows={4}
              className={`${inputClass} resize-y`}
              required
            />
          </div>

          {/* Priority, Date */}
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  <div>
    <label className={labelClass}>Priority *</label>
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
    <label className={labelClass}>Due Date *</label>
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
        className={`${inputClass} pl-11 scheme:dark`}
        required
      />
    </div>
  </div>
</div>
          {/* Footer */}
          <div className="flex flex-col-reverse gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <Info size={16} className="shrink-0 text-purple-400" />
              Fields marked with <span className="text-red-400">*</span> are
              required.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 rounded-xl border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-800 sm:flex-none"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-500 active:scale-[0.98] sm:flex-none"
              >
                <ClipboardCheck size={18} />
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;