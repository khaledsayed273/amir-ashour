import End from "./components/End";
import Aside from "./components/Home/Aside";
import Header from "./components/Home/Header";
import Section from "./components/Home/Section";
import SwiperHome from "./components/Home/SwiperHome";

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <Aside />
      <SwiperHome />
      <End />
    </>
  );
}
