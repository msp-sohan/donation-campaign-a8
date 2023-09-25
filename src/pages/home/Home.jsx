import DonationCards from "../../components/DonationCards/DonationCards";
import Banner from "../../components/Header/Banner";


const Home = () => {
   return (
      <div className="mb-20">
         <Banner></Banner>
         <div className="container mx-auto my-20 px-3 xl:px-0">
            <DonationCards></DonationCards>
         </div>
      </div>
   );
};

export default Home;