import { useContext, useEffect } from "react";
import { userContext } from "../contexts/userContext";
import { Outlet, useNavigate } from "react-router";
import toast from "react-hot-toast";
import privateApiClient from "../services/privateApiClient.js";

function PrivateRoutes() {
   const [, setUser] = useContext(userContext);
   const navigate = useNavigate();
   useEffect(() => {
      const validateUser = async () => {
         try {
            const validatedUser = await privateApiClient.get("/api/user");
            setUser(validatedUser.data);
         } catch (error) {
            console.log(error);
            if (error?.response?.data?.message) {
               toast.error(error.response.data.message);
            } else {
               toast.error(error.message);
            }
            localStorage.removeItem("token");
            navigate("/login");
         }
      };
      validateUser();
   }, []);
   return <Outlet />;
}

export default PrivateRoutes;
