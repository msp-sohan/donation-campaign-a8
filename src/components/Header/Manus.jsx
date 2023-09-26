import { NavLink } from "react-router-dom";

const Manus = () => {
	return (
		<ul className="mt-">
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
	);
};

export default Manus;
