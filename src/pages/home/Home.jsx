import { useState } from "react";
import DonationCards from "../../components/DonationCards/DonationCards";
import Banner from "../../components/Header/Banner";

const Home = () => {
   const [getSearchResult, setGetSearchResult] = useState("")

	const handleSearchText = (searchText) => {
		setGetSearchResult(searchText);
	};

	return (
		<div className="mb-20">
			<Banner onSearch={handleSearchText}></Banner>
			<div className="container mx-auto my-20 px-3 xl:px-0">
				<DonationCards getSearchResult={getSearchResult}></DonationCards>
			</div>
		</div>
	);
};

export default Home;
