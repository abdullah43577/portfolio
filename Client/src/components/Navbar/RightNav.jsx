import homeIcon from '/icons/Home.png';
import servicesIcon from '/icons/Services.png';
import cvIcon from '/icons/cv.png';
import portfolioIcon from '/icons/Portfolio.png';
import contactIcon from '/icons/Contact.png';
import blogIcon from '/icons/Blog.png';
import contrastIcon from '/icons/Contrast.png';
import { useContext } from 'react';
import { NavContext } from '../RootLayout';
import { NavLink } from 'react-router-dom';

export default function RightNav() {
  const { toggle, handleNavToggle } = useContext(NavContext);

  return (
    <section className="w-full h-[10vh] right-0 lg:w-[5%] absolute top-0 lg:top-[32px] lg:right-[32px] bg-modalBg px-4 flex flex-row items-center lg:flex-col gap-[20px] lg:gap-[200px] lg:h-[1200px] justify-between lg:justify-normal lg:px-0">
      <section className="icon__container w-[50px] lg:w-full flex justify-start lg:justify-center lg:mt-8 cursor-pointer">
        <img src={contrastIcon} alt="background toggle btn" />
      </section>

      <section
        className={`icons w-[20%] mx-auto flex flex-col items-center justify-start gap-4 lg:gap-8 absolute top-[10vh] right-0 bg-modalBg h-screen ${
          toggle.mainNav ? 'translate-x-0' : 'translate-x-full'
        } lg:bg-transparent lg:static lg:w-full lg:translate-x-0`}
      >
        <NavLink to="/" href="#" className="social__icon__facebook p-2 rounded-full hover:bg-cta">
          <img src={homeIcon} alt="home icon" className="w-[15px] lg:w-auto" />
        </NavLink>

        <NavLink to="/services" className="social__icon__facebook bg-background p-2 rounded-full hover:bg-cta">
          <img src={servicesIcon} alt="services icon" />
        </NavLink>

        <NavLink to="/cv" className="social__icon__facebook bg-background p-2 rounded-full hover:bg-cta">
          <img src={cvIcon} alt="cv icon" className="w-[15px] lg:w-auto" />
        </NavLink>

        <NavLink to="/portfolio" className="social__icon__facebook bg-background p-2 rounded-full hover:bg-cta">
          <img src={portfolioIcon} alt="portfolio icon" className="w-[15px] lg:w-auto" />
        </NavLink>

        <NavLink to="/blogs" className="social__icon__facebook bg-background p-2 rounded-full hover:bg-cta">
          <img src={blogIcon} alt="blog icon" className="w-[15px] lg:w-auto" />
        </NavLink>

        <NavLink to="/contact" className="social__icon__facebook bg-background p-2 rounded-full hover:bg-cta">
          <img src={contactIcon} alt="contact icon" className="w-[15px] lg:w-auto" />
        </NavLink>
      </section>

      <section className="toggle__bar sm:block lg:hidden" onClick={handleNavToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </section>
    </section>
  );
}
