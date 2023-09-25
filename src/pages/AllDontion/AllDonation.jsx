import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";

const AllDonation = () => {
	const [donations, setDonations] = useState([]);
	const [noDataFound, setNoDatafound] = useState(false);
	const [dataLength, setDataLength] = useState(4);

	useEffect(() => {
		const storedMoney = JSON.parse(localStorage.getItem("donation"));
		if (storedMoney) {
			setDonations(storedMoney);
		} else {
			setNoDatafound("No Data Found");
		}
	}, []);

	const handleRemove = () =>{
		localStorage.clear();
		setDonations([]);
		setNoDatafound("No Data Found");
	}



	return (
		<div>
			{noDataFound ? (
				<p className="h-[70vh] text-4xl font-semibold flex justify-center items-center">You dont give any Donation yet..</p>
			) : (
				<div>
					{donations.length > 0 && (
						<div>
							<button onClick={handleRemove} className="px-5 py-2 rounded-lg font-semibold mt-10 bg-green-200 block mx-auto">Delete All Donation</button>
						</div>
					)}
				</div>
			)}
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 my-20 px-3 xl:px-0">
					{donations.slice(0, dataLength).map((donate) => (
						<DonateCard key={donate.id} donate={donate}></DonateCard>
					))}
				</div>

				<div className="flex justify-center">
					{donations.length > 4 && dataLength !== donations.length && (
						<button onClick={() => setDataLength(donations.length)} className="btn bg-green-600 text-white text-lg p-2 rounded-lg">
							Show All
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default AllDonation;
