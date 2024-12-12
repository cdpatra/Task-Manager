import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
function TaskBox({ task, requestDeleteTask, requestUpdateTask }) {
   const { _id, title, isCompleted } = task;
   const [isExpanded, setIsExpanded] = useState(false);
   const [updatedTask, setUpdatedTask] = useState(title);
   return (
      <div className="my-2">
         <div
            className={`transition-all duration-300 ease-in-out ${
               isCompleted ? "bg-green-700" : "bg-gray-600 "
            } border border-gray-700 rounded-lg ${
               isExpanded ? "rounded-b-none" : "rounded-b-lg"
            } p-4 flex justify-between`}>
            <div className="flex gap-3 items-center">
               <div
                  className="text-xl cursor-pointer"
                  onClick={() =>
                     requestUpdateTask({ isCompleted: !isCompleted, title }, _id, () => {
                        if (!isCompleted) {
                           toast.success("Task Completed");
                        }
                     })
                  }>
                  {isCompleted ? <IoMdCheckmarkCircleOutline /> : <MdRadioButtonUnchecked />}
               </div>
               {title}
            </div>
            <div className="flex gap-4 items-center">
               <div className="text-xl cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                  <FaPen />
               </div>
               <div className="text-2xl cursor-pointer" onClick={() => requestDeleteTask(_id)}>
                  <MdDelete />
               </div>
            </div>
         </div>
         <div
            className={`flex transition-all duration-300 ease-in-out  overflow-hidden  ${
               isExpanded ? "max-h-[500px]" : "max-h-0"
            } `}>
            <textarea
               id="message"
               onChange={(event) => setUpdatedTask(event.target.value)}
               value={updatedTask}
               className="block font-poppins px-4 py-2 w-full outline-none text-sm rounded-r-none rounded-t-none  rounded-lg border   bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
               placeholder="Edit your task ..."
            />
            <button
               type="button"
               onClick={() => {
                  requestUpdateTask({ isCompleted, title: updatedTask }, _id, () =>
                     toast.success("Task Updated Successfully")
                  );
                  setIsExpanded(false);
               }}
               className="text-white  rounded-l-none rounded-t-none focus:ring-4 font-medium rounded-lg px-2 py-1 text-xs  bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
               Update
            </button>
         </div>
      </div>
   );
}

export default TaskBox;
