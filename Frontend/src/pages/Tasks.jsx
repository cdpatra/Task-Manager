import { useContext, useEffect, useState } from "react";
import TaskBox from "../components/TaskBox";
import UserNavBar from "../components/UserNavBar";
import privateApiClient from "../services/privateApiClient.js";
import toast from "react-hot-toast";
import { userContext } from "../contexts/userContext.jsx";

const requestAllTasks = async () => {
   try {
      return await privateApiClient.get("/api/task");
   } catch (error) {
      if (error?.response?.data?.message) {
         toast.error(error.response.data.message);
      } else {
         toast.error(error.message);
      }
   }
   return null;
};

function Tasks() {
   const [user] = useContext(userContext);

   // fetch all tasks
   const [allTasks, setAllTasks] = useState([]);
   useEffect(() => {
      (async () => {
         const tasks = await requestAllTasks();
         if (tasks) setAllTasks(tasks.data);
      })();
   }, []);

   //  create task
   const [taskTitle, setTaskTitle] = useState("");
   const requestAddTask = async () => {
      try {
         if (!taskTitle.trim()) return;
         await privateApiClient.post("/api/task", { title: taskTitle });
         toast.success("Task Added Successfully");
         (async () => {
            const tasks = await requestAllTasks();
            if (tasks) setAllTasks(tasks.data);
         })();
         setTaskTitle("");
      } catch (error) {
         if (error?.response?.data?.message) {
            toast.error(error.response.data.message);
         } else {
            toast.error(error.message);
         }
      }
   };

   const requestDeleteTask = async (_id) => {
      try {
         await privateApiClient.delete(`/api/task/${_id}`);
         toast.success("Task Deleted Successfully");
         (async () => {
            const tasks = await requestAllTasks();
            if (tasks) setAllTasks(tasks.data);
         })();
      } catch (error) {
         if (error?.response?.data?.message) {
            toast.error(error.response.data.message);
         } else {
            toast.error(error.message);
         }
      }
   };

   const requestUpdateTask = async (body, _id, toastMessage) => {
      try {
         await privateApiClient.patch(`/api/task/${_id}`, body);
         toastMessage();
         (async () => {
            const tasks = await requestAllTasks();
            if (tasks) setAllTasks(tasks.data);
         })();
      } catch (error) {
         if (error?.response?.data?.message) {
            toast.error(error.response.data.message);
         } else {
            toast.error(error.message);
         }
      }
   };

   return (
      <div className="bg-neutral-950 min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pt-24">
         <UserNavBar />
         <div className="flex justify-center">
            <div className="w-full px-2">
               <div className="max-w-[800px] mx-auto">
                  <div className="my-8 text-2xl font-inter text-center font-extrabold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-400 text-transparent bg-clip-text">
                     Welcome! <span className="text-slate-300 font-semibold font-poppins">{user.name}</span>
                  </div>
                  <div className="flex flex-col">
                     <div className="flex gap-2 mb-8">
                        <input
                           type="text"
                           id="default-input"
                           onChange={(event) => setTaskTitle(event.target.value)}
                           value={taskTitle}
                           className="bg-gray-50 border outline-none border-gray-300 text-gray-900  rounded-lg block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        />
                        <button
                           type="button"
                           onClick={() => requestAddTask()}
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                           Add
                        </button>
                     </div>
                     {allTasks.map((task) => (
                        <TaskBox
                           key={task._id}
                           task={task}
                           requestDeleteTask={requestDeleteTask}
                           requestUpdateTask={requestUpdateTask}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Tasks;
