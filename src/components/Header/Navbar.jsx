import { NavLink } from "react-router-dom";


const Navbar = () => {
   return (
      <div className="bg-transparent">
         <nav className="flex flex-col lg:flex-row justify-between items-center p-5">
            <img src="/Logo.png" alt="" />
            <ul className="flex gap-5 mt-5 lg:mt-0">
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive, isPending }) =>
                        isPending
                           ? "pending"
                           : isActive
                              ? "text-[#FF444A] font-bold underline"
                              : "text-lg"
                     }
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/donation"
                     className={({ isActive, isPending }) =>
                        isPending
                           ? "pending"
                           : isActive
                              ? "text-[#FF444A] font-bold underline"
                              : "text-lg"
                     }
                  >
                     Donation
                  </NavLink>
               </li>

               <li>
                  <NavLink
                     to="/statistics"
                     className={({ isActive, isPending }) =>
                        isPending
                           ? "pending"
                           : isActive
                              ? "text-[#FF444A] font-bold underline"
                              : "text-lg"
                     }
                  >
                     Statistics
                  </NavLink>
               </li>


            </ul>
         </nav>
      </div>
   );
};

export default Navbar;