import { CalendarDays } from "lucide-react";

const CompleteTask = ({ task }) => {
  const priorityStyles = {
    High: "bg-red-500/15 text-red-400 border-red-500/30",
    Moderate: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    Low: "bg-green-500/15 text-green-400 border-green-500/30",
  };

  return (
    <div
      key={task.id}
      className="w-72 shrink-0 rounded-2xl border border-gray-800 bg-[#111118] p-5 transition duration-300 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-950/20"
    >
      <div className="mb-5">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
          Completed Task
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

      <p className="text-sm leading-6 text-gray-400">
        {task.description}
      </p>
    </div>
  );
};

export default CompleteTask;