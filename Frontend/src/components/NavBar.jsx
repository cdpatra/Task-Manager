import { Link } from "react-router";
import logo from "../assets/images/logo.png";
function NavBar() {
   return (
      <nav className="absolute p-2 flex justify-between top-0 right-0 left-0">
         <Link to={"/"}>
            <div className="font-inter font-extrabold md:text-2xl flex gap-1 items-center">
               <img src={logo} alt="logo" className="h-12 md:h-16" />
               <span>TaskEase</span>
            </div>
         </Link>
         <div className="flex justify-center gap-2 items-center scale-75 md:scale-100">
            {localStorage.getItem("token") ? (
               <Link to={"/user/tasks"}>
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-indigo-400 group-hover:from-green-500 group-hover:to-indigo-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                     <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Your Tasks --&gt;
                     </span>
                  </button>
               </Link>
            ) : (
               <>
                  <Link to={"/login"}>
                     <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-indigo-400 group-hover:from-green-500 group-hover:to-indigo-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                           Login
                        </span>
                     </button>
                  </Link>
                  <Link to={"/register"}>
                     <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-indigo-400 group-hover:from-green-500 group-hover:to-indigo-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                           Register
                        </span>
                     </button>
                  </Link>
               </>
            )}
         </div>
      </nav>
   );
}

export default NavBar;
