import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const DonationDetail = () => {
	const [donations, setDonations] = useState([]);

	const details = useLoaderData();
	const { id } = useParams();
	const idInt = JSON.parse(id);

	useEffect(() => {
		if (details) {
			const findDetails = details.find((detail) => detail.id === idInt);
			setDonations(findDetails);
		}
	}, [details, idInt]);

	return (
		<div>
         {
            <Details donations={donations}></Details>
         }
      </div>
	);
};

export default DonationDetail;
