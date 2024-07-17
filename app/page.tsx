import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo"
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-black">
      <Banner />
      <Navbar />
      <Hero />
      <Logo />
      <Features />
      <Showcase />
      <Faq />
      <Access />
      <Footer />
    </div>
  );
}
