import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const DonationCards = ({ getSearchResult }) => {
	const [donationCard, setDonationCard] = useState([]);
	const [filteredDonationCards, setFilteredDonationCards] = useState([]);

	useEffect(() => {
		fetch("https://mspsohan.github.io/donation_campaign/donation_campaign.json")
			.then((res) => res.json())
			.then((data) => setDonationCard(data));
	}, []);

	useEffect(() => {
		if (getSearchResult) {
			const filteredCards = donationCard.filter((card) => card.category.toLowerCase().includes(getSearchResult.toLowerCase()));
			setFilteredDonationCards(filteredCards);
		} else {
			setFilteredDonationCards(donationCard);
		}
	}, [getSearchResult, donationCard]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{filteredDonationCards.map((cards) => (
				<DonationCard cards={cards} key={cards.id} />
			))}
		</div>
	);
};

export default DonationCards;
