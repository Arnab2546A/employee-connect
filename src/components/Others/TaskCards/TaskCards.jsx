import { useContext } from "react";
import { LoggedInUserContext } from "../../../Context/LoggedInUserContext";
import NewTask from '../../Task/NewTask'

const TaskCards = () => {
  const data = useContext(LoggedInUserContext);


  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6">
    <h2 className="mb-5 text-2xl font-bold text-white">
      All Tasks
    </h2>

    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {(data?.tasks ?? []).map((task) => (
        task.status==='New' && <NewTask task={task} key={task.id}/>
      ))}
    </div>
  </section>
  );
};

export default TaskCards;