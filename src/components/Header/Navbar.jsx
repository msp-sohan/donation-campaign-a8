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
							className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] text-xl font-bold underline" : "text-xl")}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/donations"
							className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] text-xl font-bold underline" : "text-xl")}
						>
							Donation
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/statistics"
							className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] text-xl font-bold underline" : "text-xl")}
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
