import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo"
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <Navbar />
      <Hero />
      <Logo />
      <Features />
      <Showcase />
    </div>
  );
}
