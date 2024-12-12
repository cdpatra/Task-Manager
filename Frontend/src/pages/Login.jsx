import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import apiClient from "../services/apiClient";
import toast from "react-hot-toast";
import { userContext } from "../contexts/userContext";

function Login() {
   const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
   const onChangeHandler = (key, value) => {
      setLoginInfo({ ...loginInfo, [key]: value });
   };
   const [, setUser] = useContext(userContext);
   const navigate = useNavigate();
   const submitHandler = (event) => {
      event.preventDefault();
      const requestLogin = async () => {
         try {
            const userInfo = await apiClient.post("/api/user/login", loginInfo);
            setUser(userInfo.data);
            localStorage.setItem("token", JSON.stringify(userInfo.data.token));
            toast.success("You are Logged In");
            navigate("/user/tasks");
         } catch (error) {
            toast.error(error.message);
         }
      };
      requestLogin();
   };
   return (
      <section className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Login to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                     <div>
                        <label
                           htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Your email
                        </label>
                        <input
                           type="email"
                           onChange={(event) => onChangeHandler("email", event.target.value)}
                           value={loginInfo.email}
                           id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com"
                           required=""
                        />
                     </div>
                     <div>
                        <label
                           htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Password
                        </label>
                        <input
                           type="password"
                           onChange={(event) => onChangeHandler("password", event.target.value)}
                           value={loginInfo.password}
                           id="password"
                           placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required=""
                        />
                     </div>
                     <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Login
                     </button>
                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <Link
                           to={"/register"}
                           className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                           Register
                        </Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Login;
