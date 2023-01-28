import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Heropg2 from "./components/Heropg2";
import Middlepg from "./components/Middlepg";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Grid/>
      <Heropg2/>
      <Middlepg/>
      <Blogs/>
      <Footer/>
    </>
  );
}
