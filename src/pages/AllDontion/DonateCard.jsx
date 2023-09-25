import { Link } from "react-router-dom";

const DonateCard = ({ donate }) => {
	const { id, picture, title, category, card_bg, text_color, dynamicColor, price } = donate;

	return (
		<div className={`flex flex-col lg:flex-row lg:pb-0 lg:w-full  pb-6 lg:h-[220px] lg:items-center ${card_bg} bg-opacity-20 border border-gray-200 rounded-lg shadow`}>
			<img
				className="object-cover w-full lg:max-w-[50%] lg:h-full xl:max-w-xs rounded-t-lg max-h-[800px] md:h-auto md:max-w-xs-40 md:rounded-none md:rounded-l-lg"
				src={picture}
				alt=""
			/>
			<div className=" px-4">
				<p
					style={{ color: dynamicColor }}
					className={`my-2 w-28 px-3 rounded-md lg:text-lg font-medium ${card_bg} bg-opacity-30 ${text_color}`}
				>
					{category}
				</p>
				<h5 className={`mt-3 lg:mt-0 text-2xl lg:text-[19px] xl:text-2xl xl:py-3 font-bold tracking-tight text-black `}>{title}</h5>
				<p className={`pt-2 lg:pt-0 pb-5 font-extraboldbold text-lg ${text_color}`}>${price}</p>
				<Link to={`/donation/${id}`} className={`p-2 lg:p-1 xl:p-2 border text-white ${card_bg} font-semibold text-xl rounded-lg text-center`}>
					See Details
				</Link>
			</div>
		</div>
	);
};

export default DonateCard;
