import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const DonationCards = () => {
   const [donationCard, setDonationCard] = useState([])
   useEffect(()=>{
      fetch('/donation.json')
      .then(res => res.json())
      .then(data => setDonationCard(data))
   },[])
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {
            donationCard.map(cards => <DonationCard cards={cards} key={cards.id}></DonationCard>)
         }
      </div>
   );
};

export default DonationCards;