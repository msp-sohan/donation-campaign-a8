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

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 my-20 px-3 xl:px-0">
				{donations.slice(0, dataLength).map((donate) => (
					<DonateCard key={donate.id} donate={donate}></DonateCard>
				))}
			</div>

			<div className="flex justify-center">
				{donations.length > 4 && dataLength !== donations.length && 
					<button onClick={() => setDataLength(donations.length)} className="btn bg-green-600 text-white text-lg p-2 rounded-lg">
						Show All
					</button>
				}
			</div>
		</>
	);
};

export default AllDonation;
