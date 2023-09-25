import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";

const AllDonation = () => {
   const [donations, setDonations] = useState([]);
   const [noDataFound, setNoDatafound] = useState(false);

   useEffect(()=>{
      const storedMoney = JSON.parse(localStorage.getItem("donation"));
      if (storedMoney) {
         setDonations(storedMoney)
      } else{
         setNoDatafound("No Data Found");
      }
   },[]);



   return (
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 my-20">
         {
            donations.map(donate => <DonateCard key={donate.id} donate={donate}></DonateCard>)
         }
      </div>
   );
};

export default AllDonation;