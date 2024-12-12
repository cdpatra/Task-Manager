import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import Tasks from "./pages/Tasks";
import PublicRoutes from "./components/PublicRoutes";
import Authentication from "./components/Authentication";

function App() {
   return (
      <Routes>
         <Route element={<PublicRoutes />}>
            <Route path="*" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
         </Route>
         <Route element={<Authentication />}>
            <Route path="user" element={<PrivateRoutes />}>
               <Route path="tasks" element={<Tasks />} />
            </Route>
         </Route>
      </Routes>
   );
}

export default App;
