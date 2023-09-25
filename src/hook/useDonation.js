import { useEffect, useState } from "react";

const useDonation = () => {
	const [donations, setDonations] = useState([]);
	useEffect(() => {
		fetch("https://mspsohan.github.io/donation_campaign/donation_campaign.json")
			.then((res) => res.json())
			.then((data) => setDonations(data));
	}, []);
	return [donations];
};

export default useDonation;
