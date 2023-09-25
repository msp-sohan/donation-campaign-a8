import { Link } from "react-router-dom";

const DonationCard = ({ cards }) => {
	const { id, picture, title, category, card_bg, text_color, dynamicColor, btn_bg } = cards;

	return (
		<Link to={`/donation/${id}`}>
         <div className={`border border-gray-200 h-96 lg:h-[380px] rounded-lg shadow ${card_bg} bg-opacity-20 dark:border-gray-300`}>
				<img
					className="rounded-t-lg max-h-[250px] w-full"
					src={picture}
					alt=""
				/>
			<div className="p-5">
				<p style={{ color: dynamicColor }}
					className={`inline-flex ${card_bg} opacity-100 bg-opacity-20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300`}
				>
					{category}
				</p>
				<h5 style={{ color: dynamicColor }} className={`my-2 opacity-100 text-xl xl:text-2xl font-bold tracking-tigh`}>
					{title}
				</h5>
			</div>
		</div>
      </Link>
	);
};

export default DonationCard;
