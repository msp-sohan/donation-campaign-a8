import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetail = () => {
	const [donations, setDonations] = useState([]);
	const { picture, title, description, card_bg, text_color, btn_bg, price } =
		donations;

	const details = useLoaderData();
	const { id } = useParams();
	const idInt = JSON.parse(id);

	useEffect(() => {
		if (details) {
			const findDetails = details.find((detail) => detail.id === idInt);
			setDonations(findDetails);
		}
	}, [details, id]);

	return (
		<div className="container mx-auto my-20">
			<div className="relative h-[50vh]">
				<img src={picture} alt="" className="h-[100%]"/>
				<div className="absolute bg-black bg-opacity-50 w-full bottom-0 h-32 flex justify-start items-center">
					<button className={`ml-16 px-5 py-2 font-semibold rounded-md text-white ${card_bg}`}>Donate ${price}</button>
				</div>
			</div>
		</div>
	);
};

export default DonationDetail;
