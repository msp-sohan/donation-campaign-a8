import { Link } from "react-router-dom";

const DonateCard = ({ donate }) => {
	const { id, picture, title, category, card_bg, text_color, btn_bg, price } =
		donate;
	return (
		<div
			className={`flex flex-col items-center ${card_bg} border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700`}>
			   <img className="object-cover max-w-xs rounded-t-lg max-h-[800px] md:h-auto md:max-w-xs-40 md:rounded-none md:rounded-l-lg" src={picture} alt="" />
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{category}
				</h5>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{price}
				</p>
				<Link to={`/donation/${id}`} className={`px-5 py-3 border`}>
					See Details
				</Link>
			</div>
		</div>
	);
};

export default DonateCard;
