import AdvertistmentBanner from "./components/AdvertistmentBanner";
import MainReceipe from "./components/MainReceipe";
import Navbar from "./components/Navbar";
import SideAdvertistment from "./components/SideAdvertistment";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AdvertistmentBanner />
      <div className="flex flex-col lg:flex-row gap-8">
        <MainReceipe />
        <SideAdvertistment />
      </div>
    </div>
  );
}
