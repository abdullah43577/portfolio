import Hero from '../Hero';
import Services from './Services';
import Education from '../Education';
import Portfolio from '../Portfolio';
import Contact from './Contact';
import Blog from './Blog';

export default function Home() {
  return (
    <section className="main flex flex-col">
      <Hero />
      <Services />
      <Education />
      <Portfolio />
      <Blog />
      <Contact />
    </section>
  );
}
