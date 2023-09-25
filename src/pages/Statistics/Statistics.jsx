import { useEffect, useState } from "react";
import useDonation from "../../hook/useDonation";
import Statistic from "./Statistic";

const Statistics = () => {
	const [donations] = useDonation();
	const [totalDonation, setTotalDonation] = useState(0);
   const [givenDonation, setGivenDonation] = useState(0)

	useEffect(() => {
      const storedMoney = JSON.parse(localStorage.getItem("donation"));
		if (donations) {
         const total = storedMoney.reduce((preValue, currentValue) => preValue + currentValue.price, 0)
         setGivenDonation(total)
			const totals = donations.reduce((preValue, currentValue) => preValue + currentValue.price, 0);
			setTotalDonation(totals);
		}
	}, [donations]);

	return (
		<div className="container mx-auto">
			<Statistic totalDonation={totalDonation} givenDonation={givenDonation} />
		</div>
	);
};

export default Statistics;
