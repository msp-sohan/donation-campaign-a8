import { useEffect, useState } from "react";

const useDonation = () => {
	const [donations, setDonations] = useState([]);
	useEffect(() => {
		fetch("/public/details.json")
			.then((res) => res.json())
			.then((data) => setDonations(data));
	}, []);
	return [donations];
};

export default useDonation;
