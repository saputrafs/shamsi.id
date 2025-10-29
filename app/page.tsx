import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import ClassSection from "@/components/sections/ClassSection";
import TeacherSection from "@/components/sections/TeacherSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PartnerSection from "@/components/sections/PartnerSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProductSection />
      <ClassSection />
      <TeacherSection />
      <TestimonialSection />
      <PartnerSection />
    </div>
  );
}
