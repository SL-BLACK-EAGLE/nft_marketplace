import { Banner } from '../../../components';

const Home = () => (
  <main className="flex justify-center sm:px-4 p-12">
    <div className="w-full minmd:w-4/5">
      <Banner
        bannerName="Discover, Collect, and Sell Extraordinary NFTs"
        parentStyle="justify-start mb-6 h-72 sm:h-60 p-12
      xs:p-4 xs:h-44 rounded-3xl"
        childStyle="md:text-4xl sm:text-3xl xs:text-2xl text-left"
      />
    </div>
  </main>
);
export default Home;
