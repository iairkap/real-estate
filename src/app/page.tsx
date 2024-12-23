import Hero from "./sections/home/hero/Hero";
import Separacion from "./components/separacion/Separacion";
import FeaturedProperties from "./sections/FeaturedProperties";
import ClientReview from "./sections/ClientReview";
import FAQContainer from "./sections/Faq";
import styles from "@/app/styles/layout.module.scss"
export default function Home() {
  return (
    <main className={styles.layout}>
      <Hero />
      <Separacion />
      <FeaturedProperties />
      <ClientReview />
      <FAQContainer />
    </main>
  );
}
