import WeddingAirways from "@/components/WeddingAirways";
import BoardingPass from "@/components/BoardingPass";
import DdayCounter from "@/components/DdayCounter";
import WeddingReception from "@/components/WeddingReception";
import LocationMap from "@/components/LocationMap";
import RsvpForm from "@/components/RsvpForm";
import AccountInfo from "@/components/AccountInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <main className="max-w-[430px] mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.06)] relative">
        <WeddingAirways />
        <BoardingPass />
        <DdayCounter />
        <WeddingReception />
        <LocationMap />
        <RsvpForm />
        <AccountInfo />
        <Footer />
      </main>
    </div>
  );
}
