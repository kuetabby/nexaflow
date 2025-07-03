import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import Clients from "@/components/sections/clients";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Pricing from "@/components/sections/pricing";
import Roadmap from "@/components/sections/roadmaps";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Testimonilas from "@/components/sections/testimonilas";
import { Neuropolitical } from "@/utils/font";

const Home = () => {
  return (
    <main className={`${Neuropolitical.className}`}>
      <Hero />
      <About />
      <Roadmap />
      <Services />
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <Testimonilas /> */}
      <Pricing />
      {/* <Blog /> */}
      {/* <Clients /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default Home;
