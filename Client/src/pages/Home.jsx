import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Header from '../Components/Header';
import ProductsByCategory from "../Components/ProductsByCategory";
import HorizontalCardProduct from "../Components/HoriCard";
import VerticalCardProduct from "../Components/VertiCard";


export default function Home() {
  return (
    <div className="bg-[#F9FAFB] text-[#111111]">
      <Header />
      <ProductsByCategory />
      <Hero />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"} />

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
      <Footer />
    </div>
  );
}
