import Navigation from "../navigation/Navigation";
import Footer from "./Footer";
import AnimatedBackground from "../background/AnimatedBackground";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <AnimatedBackground />
      <Navigation />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
