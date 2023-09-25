import swal from "sweetalert";

const Details = ({ donations }) => {
	const { id, picture, title, description, card_bg, dynamicColor, price } = donations;

	const handleDonate = () => {
		const storedMoney = JSON.parse(localStorage.getItem("donation"));
		const storedDonation = [];
		if (!storedMoney) {
			storedDonation.push(donations);
			localStorage.setItem("donation", JSON.stringify(storedDonation));
         swal("Good job!", "Thank You For Your Donation!", "success");
		} else {
			const isExits = storedMoney.find((donate) => donate.id === id);
			if (!isExits) {
				storedDonation.push(...storedMoney, donations);
				localStorage.setItem("donation", JSON.stringify(storedDonation));
				swal("Good job!", "Thank You For Your Donation!", "success");
			} else{
            swal("Sorry!", "You Already Donate !", "error");
         }
		}
	};

	return (
		<div className="container mx-auto my-20 border xl:border-none p-2">
			<div className="relative">
				<img src={picture} alt="" className="h-80 md:h-96 lg:h-[calc(100vh-20vh)]  w-full" />
				<div className="absolute bg-black bg-opacity-50 w-full bottom-0 h-24 lg:h-32 flex justify-start items-center">
					<button
						onClick={handleDonate} style={{backgroundColor: dynamicColor}}
						className={`ml-5 md:ml-16 px-3 md:px-7 py-3 font-semibold text-xl rounded-md text-white bg-opacity-100`}
					>
						Donate ${price}
					</button>
				</div>
			</div>
			<h2 className="font-bold text-[40px] py-14">{title}</h2>
			<p>{description}</p>
		</div>
	);
};

export default Details;
