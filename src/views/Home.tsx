import { HomeHeader } from '@/components';
import BlinkLogo from '@/assets/blink.png';
import ImecaLogo from '@/assets/imeca-logo.png';

const Home = () => {
  return (
    <div className="relative h-screen">
      <HomeHeader />
      <video
        src="https://res.cloudinary.com/dk7tbqrxn/video/upload/v1713543156/qzhehvyz6aosl8pennce.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black opacity-70 to-transparent place-content-end flex flex-col items-center justify-end">
        <div className="flex flex-col md:flex-row gap-5 justify-between mb-12">
          <img src={BlinkLogo} alt="Logo" className="drop-shadow-xl w-[200px] h-[90px] object-contain" />
          <img src={ImecaLogo} alt="Logo" className="drop-shadow-xl w-[200px] h-[90px] object-contain" />
        </div>
        <div className="text-center w-full px-12 pb-24">
          <h1 className="text-white text-5xl font-semibold">
            Innovation in every step — streamlining your warehouse with smart, tailored solutions.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
