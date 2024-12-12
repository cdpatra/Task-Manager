import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import toast from "react-hot-toast";

function Authentication() {
   const navigate = useNavigate();
   useEffect(() => {
      if (!localStorage.getItem("token")) {
         navigate("/login");
         toast.error("Login Required");
      }
   }, []);
   return <Outlet />;
}

export default Authentication;
