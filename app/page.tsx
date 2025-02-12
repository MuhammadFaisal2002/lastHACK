import Image from "next/image";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Footer/>
    </div>
  );
}
