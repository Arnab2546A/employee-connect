import { useContext } from "react";
import { LoggedInUserContext } from "../../../Context/LoggedInUserContext";
import NewTask from '../../Task/NewTask'
import AcceptTask from '../../Task/AcceptTask'
import FailedTask from '../../Task/FailedTask'
import CompleteTask from '../../Task/CompleteTask'
const TaskCards = () => {
  const loggedInData = useContext(LoggedInUserContext);
  const data=loggedInData.loggedInUser;
  
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6">
    <h2 className="mb-5 text-2xl font-bold text-white">
      All Tasks
    </h2>

    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {(data?.tasks ?? []).map((task,idx) => (
        task.status==='New' && <NewTask task={task} key={idx}/>
      ))}

      {(data?.tasks ?? []).map((task,idx) => (
        task.status==='Accepted' && <AcceptTask task={task} key={idx}/>
      ))}

      {(data?.tasks ?? []).map((task,idx) => (
        task.status==='Failed' && <FailedTask task={task} key={idx}/>
      ))}

      {(data?.tasks ?? []).map((task,idx) => (
        task.status==='Completed' && <CompleteTask task={task} key={idx}/>
      ))}
    </div>
  </section>
  );
};

export default TaskCards;