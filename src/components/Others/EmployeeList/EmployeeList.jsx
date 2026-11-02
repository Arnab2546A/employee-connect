import { Users, ClipboardList, CheckCircle2 } from "lucide-react";
import {useContext} from 'react'
import {AuthContext} from '../../../Context/AuthProvider'
const EmployeeList = () => {
    const authData = useContext(AuthContext)
    const data=authData?authData.userData:{employee:null,admin:null}
    const {employee}=data?data:{employee:null}
  return (
    <section className="flex h-[600px] w-full min-h-0 flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-[#10101b] p-4 text-white shadow-lg sm:p-5 lg:p-6">
      <header className="mb-5 flex shrink-0 items-center gap-3">
        <div className="rounded-xl bg-purple-600 p-3">
          <Users size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold">Employee List</h2>
          <p className="text-sm text-gray-400">Employee task overview</p>
        </div>
      </header>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto scrollbar-hide pr-2">
        {employee.map((employee) => (
          <div
            key={employee.id}
            className="rounded-xl border border-gray-800 bg-[#171724] p-4"
          >
            <h3 className="mb-4 font-semibold">{employee.name}</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 p-3">
                <ClipboardList size={18} className="shrink-0 text-blue-400" />
                <div>
                  <p className="text-lg font-bold text-blue-400">
                    {employee.tasks.filter((e)=>e.status==='Accepted')}
                  </p>
                  <p className="text-xs text-gray-400">Active Tasks</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3">
                <CheckCircle2 size={18} className="shrink-0 text-green-400" />
                <div>
                  <p className="text-lg font-bold text-green-400">
                    {employee.completedTask}
                  </p>
                  <p className="text-xs text-gray-400">Completed Tasks</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeList;