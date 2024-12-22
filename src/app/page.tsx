import Hero from "./sections/home/hero/Hero";
import Separacion from "./components/separacion/Separacion";
import FeaturedProperties from "./sections/FeaturedProperties";
import ClientReview from "./sections/ClientReview";
import FAQContainer from "./sections/Faq";
export default function Home() {
  return (
    <main>

      <Hero />
      <Separacion />
      <FeaturedProperties />
      <ClientReview />
      <FAQContainer />
    </main>
  );
}
