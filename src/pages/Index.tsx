
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Team } from "@/components/home/Team";
import { Contact } from "@/components/home/Contact";
import { MainLayout } from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      {/* <Team /> */}
      <Contact />
    </MainLayout>
  );
};

export default Index;
