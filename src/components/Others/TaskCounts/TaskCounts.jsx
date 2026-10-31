import {
  ClipboardList,
  CheckCircle2,
  CirclePlus,
  CircleX,
} from "lucide-react";

const TaskNavbar = () => {
  const tasks = [
    {
      title: "Total Tasks",
      count: 24,
      icon: ClipboardList,
      color: "blue",
      style: "border-blue-500/30 bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      title: "Completed Tasks",
      count: 12,
      icon: CheckCircle2,
      color: "green",
      style: "border-green-500/30 bg-green-500/10",
      iconColor: "text-green-400",
    },
    {
      title: "New Tasks",
      count: 7,
      icon: CirclePlus,
      color: "purple",
      style: "border-purple-500/30 bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      title: "Failed Tasks",
      count: 5,
      icon: CircleX,
      color: "red",
      style: "border-red-500/30 bg-red-500/10",
      iconColor: "text-red-400",
    },
  ];

  return (
    <nav className="w-full px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-5 text-2xl font-bold text-white">
          Task Summary
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tasks.map((task) => {
          const Icon = task.icon;

          return (
            <div
              key={task.title}
              className={`rounded-2xl border ${task.style} p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-400">
                  {task.title}
                </p>

                <div
                  className={`rounded-xl bg-[#151520] p-3 ${task.iconColor}`}
                >
                  <Icon size={22} />
                </div>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-white">
                {task.count}
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                Task overview
              </p>
            </div>
          );
        })}
        </div>
      </div>
    </nav>
  );
};

export default TaskNavbar;