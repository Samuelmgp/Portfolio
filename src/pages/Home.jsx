import PageWrapper from "../components/layout/PageWrapper";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col justify-center min-h-[calc(100dvh-8rem)]">
      <HeroSection />
      <AboutSection />
    </PageWrapper>
  );
}
