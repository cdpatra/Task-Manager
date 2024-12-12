import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/userContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Routes>
         <Route
            path="/*"
            element={
               <UserProvider>
                  <Toaster />
                  <div className="dark:text-slate-300">
                     <App />
                  </div>
               </UserProvider>
            }
         />
      </Routes>
   </BrowserRouter>
);
