import { Link } from "react-router-dom";

const DonationCard = ({ cards }) => {
	const { id, picture, title, category, card_bg, text_color, btn_bg } = cards;

   const color = {
      blue: "text-blue-500",
      red: "text-red-500",
      green: "text-green-500",
      amber: "text-[#9f1239]",
    };
    

	return (
		<Link to={`/donation/${id}`}>
         <div className={`border border-gray-200 rounded-lg shadow ${card_bg} bg-opacity-20 dark:border-gray-300`}>
				<img
					className="rounded-t-lg max-h-[250px] w-full"
					src={picture}
					alt=""
				/>
			<div className="p-5">
				<p
					className={`inline-flex ${card_bg} ${text_color} opacity-100 bg-opacity-20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300`}
				>
					{category}
				</p>
				<h5 className={`my-2 ${text_color} opacity-100 text-2xl font-bold tracking-tigh`}>
					{title}
				</h5>
			</div>
		</div>
      </Link>
	);
};

export default DonationCard;
