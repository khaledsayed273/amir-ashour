import Aside from "./components/Home/Aside";
import Header from "./components/Home/Header";
import Section from "./components/Home/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Section />
      <Aside />
    </main>
  );
}
