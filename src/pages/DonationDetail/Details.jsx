import swal from "sweetalert";

const Details = ({ donations }) => {
	const { id, picture, title, description, card_bg, price } = donations;

	const handleDonate = () => {
		const storedMoney = JSON.parse(localStorage.getItem("donation"));
		const storedDonation = [];
		if (!storedMoney) {
			storedDonation.push(donations);
			localStorage.setItem("donation", JSON.stringify(storedDonation));
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
		<div className="container mx-auto my-20">
			<div className="relative">
				<img src={picture} alt="" className="h-[calc(100vh-20vh)] w-full" />
				<div className="absolute bg-black bg-opacity-50 w-full bottom-0 h-32 flex justify-start items-center">
					<button
						onClick={handleDonate}
						className={`ml-16 px-5 py-2 font-semibold rounded-md text-white ${card_bg}`}
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
