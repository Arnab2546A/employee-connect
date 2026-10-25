
import { CalendarDays } from "lucide-react";

const TaskCards = () => {
  const tasks = [
    {
      id: 1,
      priority: "High",
      date: "Oct 28, 2026",
      title: "Fix Login Bug",
      description:
        "Resolve the issue users are facing while logging in with their accounts.",
    },
    {
      id: 2,
      priority: "Moderate",
      date: "Oct 29, 2026",
      title: "Update User Profile",
      description:
        "Enhance the profile page with new fields and improve form validation.",
    },
    {
      id: 3,
      priority: "Low",
      date: "Oct 30, 2026",
      title: "Optimize Images",
      description:
        "Compress and optimize images across the dashboard to improve performance.",
    },
    {
      id: 4,
      priority: "High",
      date: "Nov 01, 2026",
      title: "Database Backup",
      description:
        "Perform a complete database backup and verify data integrity.",
    },
    {
      id: 5,
      priority: "Moderate",
      date: "Nov 02, 2026",
      title: "Email Notification Setup",
      description:
        "Set up email notifications for task assignments and deadlines.",
    },
    {
      id: 6,
      priority: "Low",
      date: "Nov 03, 2026",
      title: "Improve Dashboard UI",
      description:
        "Make the dashboard more responsive and improve the overall user experience.",
    },
  ];

  const priorityStyles = {
    High: "bg-red-500/15 text-red-400 border-red-500/30",
    Moderate: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    Low: "bg-green-500/15 text-green-400 border-green-500/30",
  };

  return (
    <section className="w-full px-4 py-6 md:px-6">
      <h2 className="mb-5 text-2xl font-bold text-white">
        All Tasks
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="w-72 shrink-0 rounded-2xl border border-gray-800 bg-[#111118] p-5 transition duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-950/20"
          >
            <div className="mb-7 flex items-center justify-between gap-3">
              <span
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                  priorityStyles[task.priority]
                }`}
              >
                {task.priority}
              </span>

              <span className="flex items-center gap-1.5 whitespace-nowrap text-xs text-gray-400">
                <CalendarDays size={14} />
                {task.date}
              </span>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white">
              {task.title}
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              {task.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskCards;