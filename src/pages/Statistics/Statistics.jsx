import { useEffect, useState } from "react";
import useDonation from "../../hook/useDonation";
import Statistic from "./Statistic";

const Statistics = () => {
	const [donations] = useDonation();
	const [totalDonation, setTotalDonation] = useState(0);
   const [givenDonation, setGivenDonation] = useState(0);
	const [noDataFound, setNoDatafound] = useState(false);

	useEffect(() => {
      const storedMoney = JSON.parse(localStorage.getItem("donation"));
		if (donations, storedMoney) {
         const total = storedMoney.reduce((preValue, currentValue) => preValue + currentValue.price, 0)
         setGivenDonation(total)
			const totals = donations.reduce((preValue, currentValue) => preValue + currentValue.price, 0);
			setTotalDonation(totals);
		}else{
			setNoDatafound('No Data Found')
		}
	}, [donations]);

	return (
		<div className="container mx-auto">
			{
				noDataFound ? <Statistic totalDonation={100} givenDonation={0} /> : <div>
					<Statistic totalDonation={totalDonation} givenDonation={givenDonation} />
				</div>
			}
		</div>
	);
};

export default Statistics;
