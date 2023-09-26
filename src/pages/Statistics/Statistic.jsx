import { Chart } from "react-google-charts";

export const options = {
	legend: {
		position: "bottom",
		shape: "rectangle",
		fontSize: 48,
	},

	titlePosition: "out",
	titleTextStyle: {
		fontSize: 18,
		bold: true,
		textAlign: "center",
		centerTitle: true,
	},

	pieStartAngle: 90,
	colors: ["#00C49F", "#FF444A"],
	pieSliceTextStyle: {
		color: "white",
		fontSize: 36,
	},
};

const Statistic = ({ totalDonation, givenDonation }) => {
	const percentage = (givenDonation / totalDonation) * 100;
	const data = [
		["Task", "Percentage"],
		["Your Donation", percentage],
		["Total Donation", 100 - percentage],
	];
	return (
		<div className="relative z-10"> 
			<h2 className="text-center mt-8 text-2xl lg:text-3xl absolute z-20 flex justify-center w-full font-medium">My Donation Statistics</h2>
			<div className="absolute top-0 z-0 flex justify-center items-center w-full">
				<Chart chartType="PieChart" data={data} options={options} width={"100%"} height={"700px"} />
			</div>
		</div>
	);
};

export default Statistic;
