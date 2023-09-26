import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Manus from "./Manus";

const Navbar = () => {
	const [menus, setMenus] = useState(false);

	const toggleMenu = () => {
		setMenus(!menus);
	};

	return (
		<div className="z-10">
			<nav className="flex justify-between items-center lg:h-[12vh] my-3 px-10 xl:px-0 bg-transparent">
				<img src="/Logo.png" alt="" className="w-[40%] md:w-[30%] lg:w-[20%]" />
				<div onClick={toggleMenu} className="cursor-pointer lg:hidden text-2xl">
					{menus ? <AiOutlineClose /> : <FiMenu></FiMenu>}
				</div>
				{menus && (
					<div className="absolute right-4 top-16 bg-slate-100 p-3 rounded-md">
						<Manus />
					</div>
				)}
				<ul className={`hidden lg:flex gap-5 mt-5 lg:mt-0`}>
					<li>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "text-[#FF444A] text-xl font-bold underline" : "text-xl"
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/donations"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "text-[#FF444A] text-xl font-bold underline" : "text-xl"
							}
						>
							Donation
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/statistics"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "text-[#FF444A] text-xl font-bold underline" : "text-xl"
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
