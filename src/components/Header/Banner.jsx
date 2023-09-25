import { useState } from "react";

const Banner = ({ onSearch }) => {
	const [searchDonation, setSearchDonation] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		const searchText = e.target.search.value;
		setSearchDonation(searchText);
		onSearch(searchText);
	};

	return (
		<div className="h-[70vh] relative bg-black bg-opacity-10 mx-auto flex flex-col justify-center items-center">
			<img className="h-full w-full opacity-10 bg-opacity-25 bg-black " src="https://i.ibb.co/FmHySkB/Rectangle-4281.jpg" alt="" />
			<div className="absolute text-center">
				<h1 className="text-5xl mb-10 px-3 xl:px-0 font-bold">I Grow By Helping People In Need</h1>
				<form onSubmit={handleSearch} className="my-3 px-5 xl:px-0 relative flex w-full flex-wrap items-stretch">
					<input
						type="search"
						name="search"
						className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-400 bg-transparent bg-clip-padding px-4 py-0 xl:py-[0.75rem] text-xl font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-60 dark:text-neutral-200 dark:placeholder:text-slate-700 dark:focus:border-primary"
						placeholder="Search here..."
						aria-label="Search"
						aria-describedby="button-addon1"
					/>

					<input
						type="submit"
						value="Search"
						className="relative z-[2] flex items-center rounded-r bg-red-500 px-6 py-2.5 text-lg font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg cursor-pointer"
						id="button-addon1"
						data-te-ripple-init
						data-te-ripple-color="light"
					/>
				</form>
			</div>
		</div>
	);
};

export default Banner;
