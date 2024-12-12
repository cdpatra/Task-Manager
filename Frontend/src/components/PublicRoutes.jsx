import { Outlet } from "react-router";
import NavBar from "./NavBar";

function PublicRoutes() {
   return (
      <>
         <NavBar />
         <Outlet />
      </>
   );
}

export default PublicRoutes;
